import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

// 기기별 너비 가져오기
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function HomeScreen() {
  const [city, setCity] = useState("Loading...");
  const [ok, setOk] = useState(true);

  const ask = async () => {
    let { granted } = await Location.requestForegroundPermissionsAsync(); // 앱 사용 중에만 위치 사용
    if (!granted) {
      // 권한x
      setOk(false);
    }
    if (ok) {
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
      setCity(location[0].city!);
    }
  };
  useEffect(() => {
    ask();
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
        <View style={styles.day}>
          <Text style={styles.temp}>30</Text>
          <Text style={styles.description}>Rain</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>30</Text>
          <Text style={styles.description}>Rain</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>30</Text>
          <Text style={styles.description}>Rain</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>30</Text>
          <Text style={styles.description}>Rain</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>30</Text>
          <Text style={styles.description}>Rain</Text>
        </View>
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
    flex: 3,
    // backgroundColor: "blue",
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
});
