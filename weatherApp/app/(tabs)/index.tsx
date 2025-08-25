import { View } from "react-native";

export default function HomeScreen() {
  return (
    // View는 기본적으로 flex container -> display:flex 할 필요x, 기본 direction은 column
    <View style={{ flex: 1 }}>
      {/* 부모 컨테이너를 기준으로 flex 비율을 결정 */}
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 2, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}
