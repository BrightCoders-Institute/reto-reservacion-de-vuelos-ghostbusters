import React from 'react';

import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Input from '../components/Input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Link} from '@react-navigation/native';
import Buttons from '../components/buttons';

function Login(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.title}>Flight Bookings</Text>
        <FontAwesome name="plane" size={30} color={'#5C6EF8'} />
      </View>
      <View>
        <Input label="Email*" />
        <Input label="Password*" />
        <Buttons label="In" />
        <View style={styles.rowContainer}>
          <Text style={styles.textLogin}>Don't have an account? </Text>
          <Link to={{screen: 'Register'}} style={styles.TextLoginLink}>
            Sign Up
          </Link>
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
  },
  rowContainer: {
    marginVertical: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
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

export default Login;
