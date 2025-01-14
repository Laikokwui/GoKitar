import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from '../screens/Home';
import ScheduleScreen from '../screens/Schedule';
import DisposeScreen from '../screens/Dispose';
import RewardScreen from '../screens/Reward';
import AccountScreen from '../screens/Account';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import InitialScreen from '../screens/InitialScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { GestureResponderEvent } from 'react-native';

function CustomTabBarButton({ children, onPress }: { children: React.ReactNode, onPress?: (event: GestureResponderEvent) => void }) {
  return (
    <TouchableOpacity
      style={styles.customButton}
      onPress={onPress}
    >
      <View style={styles.customButtonView}>
        {children}
      </View>
    </TouchableOpacity>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen
        name="Dispose"
        component={DisposeScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <Text style={styles.disposeText}>Dispose</Text>
            </CustomTabBarButton>
          ),
        }}
      />
      <Tab.Screen name="Reward" component={RewardScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
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
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 90,
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  customButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ff5722',
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  disposeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
