// Menu.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import Profile from './Profile';
import ProductComponent from './Products';

const Tab = createBottomTabNavigator();

const Menu = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator >
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      <Tab.Screen name="Products" component={ProductComponent}  options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default Menu;
