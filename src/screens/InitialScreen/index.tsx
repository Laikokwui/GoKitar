import * as React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

export default function InitialScreen({ navigation }: { navigation: NavigationProp<any> }) {
  React.useEffect(() => {
    // Simulate an authentication check
    const isAuthenticated = false; // Replace with actual authentication logic

    if (isAuthenticated) {
      navigation.navigate('MainTabs');
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
