/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import {StatusBar, Text, useColorScheme, View} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
        <View className="flex flex-row justify-center m-auto items-center w-[100px] h-[100px] bg-red-500">
            <Text>hello world</Text>
        </View>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

    </SafeAreaProvider>
  );
}





export default App;
