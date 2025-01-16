import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OTPScreen() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([null, null, null, null]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const validateOtp = () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 4) {
      Alert.alert('Error', 'Please enter all 4 digits');
      return false;
    }
    if (!/^\d+$/.test(otpValue)) {
      Alert.alert('Error', 'OTP must contain only numbers');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateOtp()) {
      // Here you would typically verify the OTP with your backend
      // For demo, we'll just navigate to main app
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainApp' as never }],
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Verification Code</Text>
      <Text style={styles.subtitle}>
        We have sent you a 4-digit verification code
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs.current[index] = input)}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e1e1e1',
    margin: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#ff5722',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendButton: {
    padding: 10,
  },
  resendText: {
    color: '#ff5722',
    fontSize: 16,
  },
});
