import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Webview from './screens/WebView';

const Stack = createNativeStackNavigator();

export default function StackContainer() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Webview" component={Webview} />
    </Stack.Navigator>
  );
}
