import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import {FontAwesome} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const color = {
  default: 'gray',
  primary: '#4e28ac',
};

export default function TabMenu() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarActiveTintColor: color.primary}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="home" size={24} color={focused ? color.primary : color.default} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="window-maximize" size={24} color={focused ? color.primary : color.default} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
