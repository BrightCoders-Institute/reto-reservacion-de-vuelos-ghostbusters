import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, Pressable} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Link} from '@react-navigation/native';
import Buttons from '../components/buttons';
import FormStyles from '../styles/FormStyles';
import inputStyles from '../styles/InputStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTogglePasswordVisibility} from '../hook/useTogglePasswordVisibility';
import getFormData from '../hook/getRegisterData';
import {auth} from '../firebase';
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {useNavigation} from '@react-navigation/native';

function Register(): JSX.Element {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setEmailError] = useState<string | null>(null);
  const [errorPassword, setPasswordError] = useState<string | null>(null);
  const [registerError, setRegisterError] = useState<string | null>(null);
  const navigation = useNavigation();
  
  const handlePasswordChange = (text: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    const isValid = passwordRegex.test(text);
    setPasswordError(isValid ? null : 'Password is invalid');
    setPassword(text);
  };

  const handleEmailChange = (text: string) => {
    const isValidEmail = /\S+@\S+\.\S+/.test(text);
    setEmailError(isValidEmail ? null : 'Email is invalid');
    setEmail(text);
  };

  const handleButtonClick = async () => {
    const formData = getFormData(firstName, email, password);
    console.log(formData);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      console.log(userCredential)
      navigation.navigate('Test' as never)
    }).catch((error) => {
      console.log(error)
      setRegisterError('Email in use. Use a different email')
    })
  };

  function areFieldsFilled(): boolean {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    const isValidPassword = passwordRegex.test(password);
    return (
      firstName !== '' && email !== '' && password !== '' && toggleCheckBox1
    ) && isValidEmail && isValidPassword;
  }

  return (
    <SafeAreaView style={FormStyles.container}>
      <View style={FormStyles.marginContainer}>
        <Text style={FormStyles.title}>Sign up</Text>
      </View>
      <View>
        <View>
          <Text style={inputStyles.label}>First Name</Text>
          <TextInput
            style={inputStyles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View>
          <View style={inputStyles.labelerror}>
            <Text style={inputStyles.label}>Email*</Text>
            {registerError && <Text style={inputStyles.error}>{registerError}</Text>}
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
        <Text style={FormStyles.passwordDetails}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
        <View style={FormStyles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox1}
            onValueChange={newValue => setToggleCheckBox1(newValue)}
          />
          <Text>
            I agree to the <Text>Terms</Text> and <Text>Privacy Policy *</Text>
          </Text>
        </View>
        <View style={FormStyles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={setToggleCheckBox2}
          />
          <Text>Subscribe for select product updates.</Text>
        </View>
        <Buttons
          label="Up"
          disabled={!areFieldsFilled()}
          onPress={handleButtonClick}
        />

        <View style={FormStyles.rowContainer}>
          <Text style={FormStyles.textLogin}>Already have an account? </Text>
          <Link to={{screen: 'Login'}} style={FormStyles.TextLoginLink}>
            Sign in
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register;
