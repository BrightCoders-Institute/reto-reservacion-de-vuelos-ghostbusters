import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ButtonProps {
  label: string;
}

const Buttons: React.FC<ButtonProps> = ({label}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Sign {label}</Text>
      </Pressable>
      <Text style={styles.textNormal}>or</Text>
      <Pressable style={styles.button}>
        <Ionicons name="logo-google" size={22} color={'#fff'} />
        <Text style={styles.buttonText}> Sign {label} with Google</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    rowGap: 20,
    marginTop: 20,
  },
  rowContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#5C6EF8',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 3,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'space-between',
  },
  textNormal: {
    color: '#929292',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Buttons;
