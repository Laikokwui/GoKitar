import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

export default function SignUpScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.subtitle}>Enter your details to get started</Text>
        
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Input
          label="Password"
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        
        <Button onPress={() => {}}>
          Create account
        </Button>
        
        <Button variant="secondary" onPress={() => {}} style={styles.secondaryButton}>
          Already have an account?
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  secondaryButton: {
    marginTop: 12,
  },
});
