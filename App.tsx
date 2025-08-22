import { Text, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>hi 나는 죠니다 이녀석들아</Text>
      <View
        style={{
          backgroundColor: '#e2e2e2',
          padding: '5%',
          margin: '5%',
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 22 }}>Title</Text>
        <Text>This is a description</Text>
      </View>
    </View>
  );
};

export default App;
