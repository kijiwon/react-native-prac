import { Button, Image, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>hi 나는 죠니다 이녀석들아</Text>
      {/* <Image
        source={require('./image.png')}
        style={{ width: '50%', height: '50%' }}
      /> */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/homepage/dissection.png' }}
        style={{ width: '50%', height: '50%' }}
      />
      <Button title="button" />

      {/* 터치할 수 있는 공간 */}
      <TouchableOpacity onPress={() => console.log('touch!')}>
        <Text>touchable</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
