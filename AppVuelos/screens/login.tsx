import React from 'react';

import {SafeAreaView, View, Text} from 'react-native';
import Input from '../components/Input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Link} from '@react-navigation/native';
import Buttons from '../components/buttons';
import loginStyles from '../styles/LoginStyles';

function Login(): JSX.Element {
  return (
    <SafeAreaView style={loginStyles.container}>
      <View style={loginStyles.rowContainer}>
        <Text style={loginStyles.title}>Flight Bookings</Text>
        <FontAwesome name="plane" size={30} color={'#5C6EF8'} />
      </View>
      <View>
        <Input label="Email*" />
        <Input label="Password*" />
        <Buttons label="In" />
        <View style={loginStyles.rowContainer}>
          <Text style={loginStyles.textLogin}>Don't have an account? </Text>
          <Link to={{screen: 'Register'}} style={loginStyles.TextLoginLink}>
            Sign Up
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
