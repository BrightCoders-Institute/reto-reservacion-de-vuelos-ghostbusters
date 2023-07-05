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
import getLoginData from '../hooks/getLoginData';
import {auth} from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';

function Login(): JSX.Element {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errorEmail, setEmailError] = useState<string | null>(null);
  const [errorPassword, setPasswordError] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigation = useNavigation<any>();

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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      console.log('Usuario inicio sesion')
      navigation.replace('Test')
      console.log(email)
    }).catch((error) => {
      console.log(error)
      setLoginError('Incorrect email and/or password')
    })
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
        {loginError && <Text style={inputStyles.error}>{loginError}</Text>}
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
