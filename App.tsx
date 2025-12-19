/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
// import { createStackNavigator  } from '@react-navigation/stack';
import Welcome from './src/modules/welcome/Welcome.tsx';
import Login from './src/modules/login/Login.tsx';
import OtherLogin from './src/modules/login/OtherLogin.tsx';
import HomeTab from './src/modules/home/HomeTab.tsx';


function App() {
  const Stack = createNativeStackNavigator();
  // const Stack = createStackNavigator();

  function RootStack() {
    return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtherLogin"
          component={OtherLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
