import { Text, View } from 'react-native';
import { styled } from 'styled-components/native';

const Card = styled.View`
  background-color: #e2e2e2;
  padding: 5%;
  margin: 5%;
  border-radius: 10px;
`;

const App = () => {
  return (
    <View>
      <Text>hi 나는 죠니다 이녀석들아</Text>
      <Card>
        <Text style={{ fontSize: 22 }}>Title</Text>
        <Text>This is a description</Text>
      </Card>
    </View>
  );
};

export default App;
