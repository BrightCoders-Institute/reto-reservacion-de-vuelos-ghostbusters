import React from 'react';

import {SafeAreaView, View, StyleSheet, Text, Pressable} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';

function Register(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <View>
        <Input label="First Name" />
        <Input label="Email*" />
        <Input label="Password*" />
        <Text style={styles.passwordDetails}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
        <View style={[styles.rowContainer, styles.checkbox]}>
          <CheckBox />
          <Text>
            I agree to the <Text>Terms</Text> and <Text>Privacy Policy *</Text>
          </Text>
        </View>
        <View style={[styles.rowContainer, styles.checkbox]}>
          <CheckBox />
          <Text>Subscribe for select product updates.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
          <Text style={styles.textNormal}>or</Text>
          <Pressable style={styles.button}>
            <Ionicons name="logo-google" size={22} color={'#fff'} />
            <Text style={styles.buttonText}> Sign Up with Google </Text>
          </Pressable>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.textLogin}>Already have an account? </Text>
          <Pressable>
            <Text style={styles.TextLoginLink}>Log in</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  buttonContainer: {
    rowGap: 20,
    marginTop: 20,
  },
  title: {
    color: '#5C6EF8',
    fontSize: 30,
    fontWeight: '900',
    marginVertical: 30,
  },
  rowContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  checkbox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  passwordDetails: {
    color: '#9FA9FB',
    marginBottom: 20,
    marginTop: -10,
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
  textLogin: {
    color: '#929292',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  TextLoginLink: {
    color: '#5C6EF8',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

export default Register;
