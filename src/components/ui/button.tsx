import * as React from "react"
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from "react-native"

export interface ButtonProps {
  variant?: "default" | "secondary"
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  trigger?: () => void
  disabled?: boolean
}

export function Button({ 
  variant = "default", 
  children, 
  style, 
  trigger,
  disabled 
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={trigger}
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        styles.button,
        variant === "secondary" && styles.secondaryButton,
        disabled && { opacity: 0.5 },
        style,
      ]}
    >
      <Text style={[
        styles.text,
        variant === "secondary" && styles.secondaryText,
      ]}>
        {typeof children === 'string' ? children : 'Button'}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#111',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#111',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryText: {
    color: '#111',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  secondaryPressed: {
    backgroundColor: '#f0f0f0',
  },
  pressedText: {
    opacity: 0.8,
  },
})
