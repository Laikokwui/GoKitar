import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RewardScreen() {
  return (
    <View style={styles.screen}>
      <Text>Reward Screen</Text>
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
