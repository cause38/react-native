import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabMenu from './TabContainer';

const Stack = createNativeStackNavigator();

export default function StackContainer() {
  return (
    <Stack.Navigator initialRouteName="TabMenu">
      <Stack.Screen name="TabMenu" component={TabMenu} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
