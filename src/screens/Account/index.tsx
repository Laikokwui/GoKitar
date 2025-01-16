import * as React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

export default function AccountScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.profileCard}>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
      </View>
      <View style={styles.dailyCheckin}>
        <Text>Daily Check-in</Text>
        <Button title="Check-in" onPress={() => {}} />
      </View>
      <View style={styles.buttonList}>
        <Button title="Profile" onPress={() => {}} />
        <Button title="Points History" onPress={() => {}} />
        <Button title="Settings" onPress={() => {}} />
        <Button title="FAQ" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  dailyCheckin: {
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonList: {
    width: '100%',
    alignItems: 'center',
  },
});
