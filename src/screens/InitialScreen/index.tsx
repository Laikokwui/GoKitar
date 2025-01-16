import * as React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  MainApp: undefined;
  Login: undefined;
};

type InitialScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function InitialScreen({ navigation }: InitialScreenProps) {
  React.useEffect(() => {
    // Simulate an authentication check
    const isAuthenticated = false; // Replace with actual authentication logic

    if (isAuthenticated) {
      navigation.navigate('MainApp');
    } else {
      navigation.navigate('Login');
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
