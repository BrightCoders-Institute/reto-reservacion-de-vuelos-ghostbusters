import React from 'react';
import {TextInput, View, Text} from 'react-native';
import inputStyles from '../styles/InputStyles';

interface InputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({label}) => {
  return (
    <View>
      <Text style={inputStyles.label}>{label}</Text>
      <TextInput style={inputStyles.input} />
    </View>
  );
};

export default Input;
