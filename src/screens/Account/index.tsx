import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.screen}>
      <Text>Account Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
