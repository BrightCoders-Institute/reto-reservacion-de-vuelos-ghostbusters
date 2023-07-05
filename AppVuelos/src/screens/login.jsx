import React from 'react';
import {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Link} from '@react-navigation/native';
import Buttons from '../components/buttons';
import FormStyles from '../styles/FormStyles';
import inputStyles from '../styles/InputStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';
import {useNavigation} from '@react-navigation/native';
import handleLogIn from '../hooks/HandleLogin';

function Login() {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setEmailError] = useState(null);
  const [errorPassword, setPasswordError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    const isValidEmail = /\S+@\S+\.\S+/.test(text);
    setEmailError(isValidEmail ? null : 'Email is invalid');
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    const isValid = passwordRegex.test(text);
    setPasswordError(isValid ? null : 'Password is invalid');
    setPassword(text);
  };

  const handleOnLogin = async () => {
    try {
      const user = await handleLogIn(email, password);
      if (user.hasOwnProperty('typeError')) {
        console.log(user);
        setLoginError(user);
      }
      else{
        navigation.replace('Test')
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  function areFieldsFilled() {
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
        {loginError && <Text style={inputStyles.error}>{loginError}</Text>}
        <Buttons
          label="In"
          disabled={!areFieldsFilled()}
          onPress={handleOnLogin}
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
