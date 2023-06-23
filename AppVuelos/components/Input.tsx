import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

interface InputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#9FA9FB',
    borderWidth: 2,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  label: {
    color: '#929292',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Input;
