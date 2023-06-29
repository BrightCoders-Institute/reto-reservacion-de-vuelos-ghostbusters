import React from 'react';
import {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Link} from '@react-navigation/native';
import Buttons from '../components/buttons';
import loginStyles from '../styles/LoginStyles';
import inputStyles from '../styles/InputStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTogglePasswordVisibility} from '../hook/useTogglePasswordVisibility';

function Login(): JSX.Element {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState<string>('');
  return (
    <SafeAreaView style={loginStyles.container}>
      <View style={loginStyles.rowContainer}>
        <Text style={loginStyles.title}>Flight Bookings</Text>
        <FontAwesome name="plane" size={30} color={'#5C6EF8'} />
      </View>
      <View>
        <View>
          <Text style={inputStyles.label}>Email*</Text>
          <TextInput style={inputStyles.input} keyboardType="email-address" />
        </View>
        <View>
          <Text style={inputStyles.label}>Password*</Text>
          <View style={inputStyles.passwordInputContainer}>
            <TextInput
              style={inputStyles.passwordField}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={passwordVisibility}
              value={password}
              enablesReturnKeyAutomatically
              onChangeText={text => setPassword(text)}
            />
            <Pressable onPress={handlePasswordVisibility}>
              <FontAwesome5 name={rightIcon} size={20} color={'#929292'} />
            </Pressable>
          </View>
        </View>
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
