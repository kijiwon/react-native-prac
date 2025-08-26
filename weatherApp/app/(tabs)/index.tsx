import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// 기기별 너비 가져오기
const SCREEN_WIDTH = Dimensions.get("window").width;
const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API;

export default function HomeScreen() {
  const [city, setCity] = useState("Loading...");
  const [ok, setOk] = useState(true);
  const [days, setDays] = useState([]);

  const getWeather = async () => {
    let { granted } = await Location.requestForegroundPermissionsAsync(); // 앱 사용 중에만 위치 사용
    if (!granted) {
      // 권한x
      setOk(false);
    } else {
      // 현재 위치
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({
        // 정확성
        accuracy: 5,
      });

      // 지역으로 표시
      const location = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      setCity(location[0].city as string);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      const json = await response.json();
      const list = await json.list;
      const filteredList = list.filter(
        ({ dt_txt }: { dt_txt: string }) => dt_txt.endsWith("00:00:00") // 오전 9시
      );
      setDays(filteredList);
      // console.log(days);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      {/* ScrollView의 경우 contentContainerStyle을 적용 */}
      <ScrollView
        contentContainerStyle={styles.weather}
        horizontal // 가로 스크롤
        pagingEnabled // 페이지 넘어가기
        showsHorizontalScrollIndicator={false} // 페이징 스크롤
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color={"white"}
              size={"large"}
              style={{ marginTop: 10 }}
            />
          </View>
        ) : (
          days.map((day, idx) => (
            <View style={styles.day} key={idx}>
              <Text style={styles.temp}>
                {/* 소수점 한 자리까지만 표시 */}
                {parseFloat(day.main.temp).toFixed(1)}
              </Text>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    color: "black",
    fontSize: 58,
    fontWeight: "700",
  },
  weather: {
    // flex: 3,
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 150,
    fontWeight: "800",
  },
  description: {
    fontSize: 50,
    marginTop: -20,
  },
  tinyText: {
    fontSize: 20,
  },
});
