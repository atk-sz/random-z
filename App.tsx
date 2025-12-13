import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IRootStackParamList } from './src/utils/interfaces';
import { EasyScreen, FindScreen, HardScreen, HomeScreen } from './src/screens';

function App() {
  const Stack = createNativeStackNavigator<IRootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Easy" component={EasyScreen} />
        <Stack.Screen name="Hard" component={HardScreen} />
        <Stack.Screen name="Find" component={FindScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
