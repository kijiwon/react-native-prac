import { StatusBar } from "expo-status-bar";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

// 기기별 너비 가져오기
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.city}>
        <Text style={styles.cityName}>Suwon</Text>
      </View>
      {/* ScrollView의 경우 contentContainerStyle을 적용 */}
      <ScrollView contentContainerStyle={styles.weather} horizontal>
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
