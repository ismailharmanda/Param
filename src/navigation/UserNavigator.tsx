import React, {useMemo} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from 'screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from 'theme';
import {HomeScreen} from 'screens/Home';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const UserNavigator = () => {
  const HomeStackScreen = useMemo(() => {
    return () => {
      return (
        <Stack.Navigator
          screenOptions={{
            headerTintColor: theme.colors.primary.regular,
            title: 'Home',
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      );
    };
  }, []);

  const ProfileStackScreen = useMemo(() => {
    return () => {
      return (
        <Stack.Navigator
          screenOptions={{
            headerTintColor: theme.colors.primary.regular,
            title: 'Profile',
          }}>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      );
    };
  }, []);

  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#f0edf6"
      barStyle={{backgroundColor: theme.colors.primary.regular}}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? theme.colors.primary.regular : color}
              size={26}
            />
          ),
        }}
        name="HomeStack"
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, focused}) => (
            <Feather
              name="user"
              color={focused ? theme.colors.primary.regular : color}
              size={26}
            />
          ),
        }}
        name="ProfileStack"
        component={ProfileStackScreen}
      />
    </Tab.Navigator>
  );
};
