import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/Home';
import ScheduleScreen from '../screens/Schedule';
import DisposeScreen from '../screens/Dispose';
import RewardScreen from '../screens/Reward';
import AccountScreen from '../screens/Account';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={ScheduleScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => <Icon name="search" color={color} size={24} />,
        }}
      />
      <Tab.Screen 
        name="Dispose" 
        component={DisposeScreen}
        options={{
          tabBarLabel: 'Reward',
          tabBarIcon: ({ color }) => <Icon name="card-giftcard" color={color} size={24} />,
        }}
      />
      <Tab.Screen 
        name="Reward" 
        component={RewardScreen}
        options={{
          tabBarLabel: 'Reward',
          tabBarIcon: ({ color }) => <Icon name="card-giftcard" color={color} size={24} />,
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => <Icon name="account-circle" color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#2B4141',
    height: 90,
  },
});
