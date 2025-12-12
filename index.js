/**
 * @format
 */

import { AppRegistry, Platform, UIManager } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import "./global.css";

if(Platform.OS === 'android'){
  if(UIManager.setLayoutAnimationEnabledExperimental){
    console.log("setLayoutAnimationEnabledExperimental");
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
AppRegistry.registerComponent(appName, () => App);
