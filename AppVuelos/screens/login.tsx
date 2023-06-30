import React from 'react';
import {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Link} from '@react-navigation/native';
import Buttons from '../components/buttons';
import FormStyles from '../styles/FormStyles';
import inputStyles from '../styles/InputStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTogglePasswordVisibility} from '../hook/useTogglePasswordVisibility';
import getLoginData from '../hook/getLoginData';

function Login(): JSX.Element {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errorEmail, setEmailError] = useState<string | null>(null);
  const [errorPassword, setPasswordError] = useState<string | null>(null);

  const handleEmailChange = (text: string) => {
    const isValidEmail = /\S+@\S+\.\S+/.test(text);
    setEmailError(isValidEmail ? null : 'Email is invalid');
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    const isValid = passwordRegex.test(text);
    setPasswordError(isValid ? null : 'Password is invalid');
    setPassword(text);
  };

  const handleButtonClick = () => {
    const formData = getLoginData(email, password);
    console.log(formData);
  };

  function areFieldsFilled(): boolean {
    return email !== '' && password !== '';
  }

  return (
    <SafeAreaView style={FormStyles.container}>
      <View style={[FormStyles.rowContainer, FormStyles.marginContainer]}>
        <Text style={FormStyles.title}>Flight Bookings</Text>
        <FontAwesome name="plane" size={30} color={'#5C6EF8'} />
      </View>
      <View>
        <View>
          <View style={inputStyles.labelerror}>
            <Text style={inputStyles.label}>Email*</Text>
            {email !== '' && errorEmail && (
              <Text style={inputStyles.error}>{errorEmail}</Text>
            )}
          </View>
          <TextInput
            style={inputStyles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
        <View>
          <View style={inputStyles.labelerror}>
            <Text style={inputStyles.label}>Password*</Text>
            {password !== '' && errorPassword && (
              <Text style={inputStyles.error}>{errorPassword}</Text>
            )}
          </View>
          <View style={inputStyles.passwordInputContainer}>
            <TextInput
              style={inputStyles.passwordField}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={passwordVisibility}
              value={password}
              enablesReturnKeyAutomatically
              onChangeText={handlePasswordChange}
            />
            <Pressable onPress={handlePasswordVisibility}>
              <FontAwesome5 name={rightIcon} size={20} color={'#929292'} />
            </Pressable>
          </View>
        </View>
        <Buttons
          label="In"
          disabled={!areFieldsFilled()}
          onPress={handleButtonClick}
        />
        <View style={FormStyles.rowContainer}>
          <Text style={FormStyles.textLogin}>Don't have an account? </Text>
          <Link to={{screen: 'Register'}} style={FormStyles.TextLoginLink}>
            Sign Up
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
