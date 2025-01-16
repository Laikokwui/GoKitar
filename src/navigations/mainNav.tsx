import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '../screens/InitialScreen';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import OTPScreen from '../screens/otp';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="MainApp" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
