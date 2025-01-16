import * as React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    navigation.navigate('OTP');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Enter your credentials to continue</Text>
        
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
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Button trigger={()=>handleLogin()}>
          Sign in
        </Button>
        
        <Button variant="secondary" trigger={() => navigation.navigate('SignUp')} style={styles.secondaryButton}>
          Create account
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
