import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import buttonStyles from '../styles/ButtonStyle';

interface ButtonProps {
  label: string;
  disabled: boolean;
}

const Buttons: React.FC<ButtonProps> = ({label, disabled}) => {
  return (
    <View style={buttonStyles.buttonContainer}>
      <Pressable
        style={[buttonStyles.button, disabled && buttonStyles.disabledButton]}
        disabled={disabled}>
        <Text style={buttonStyles.buttonText}>Sign {label}</Text>
      </Pressable>
      <Text style={buttonStyles.textNormal}>or</Text>
      <Pressable style={buttonStyles.button}>
        <Ionicons name="logo-google" size={22} color={'#fff'} />
        <Text style={buttonStyles.buttonText}> Sign {label} with Google</Text>
      </Pressable>
    </View>
  );
};

export default Buttons;
