import * as React from "react"
import { View, TextInput, Text, StyleSheet } from "react-native"

export interface InputProps extends React.ComponentProps<typeof TextInput> {
  label?: string
}

const Input = React.forwardRef<TextInput, InputProps>(
  ({ label, style, ...props }, ref) => {
    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          ref={ref}
          style={[styles.input, style]}
          placeholderTextColor="#666"
          {...props}
        />
      </View>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#111',
  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
})

export { Input }