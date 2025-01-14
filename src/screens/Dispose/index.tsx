import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DisposeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Dispose Screen</Text>
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
