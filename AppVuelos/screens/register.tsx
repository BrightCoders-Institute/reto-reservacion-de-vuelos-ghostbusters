import {useState} from 'react';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Pressable} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Link} from '@react-navigation/native';
import Buttons from '../components/buttons';
import registerStyles from '../styles/RegisterStyles';
import inputStyles from '../styles/InputStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTogglePasswordVisibility} from '../hook/useTogglePasswordVisibility';

function Register(): JSX.Element {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={registerStyles.container}>
      <Text style={registerStyles.title}>Sign up</Text>
      <View>
        <View>
          <Text style={inputStyles.label}>First Name</Text>
          <TextInput style={inputStyles.input} />
        </View>
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
        <Text style={registerStyles.passwordDetails}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
        <View style={[registerStyles.rowContainer, registerStyles.checkbox]}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox1}
            onValueChange={newValue => setToggleCheckBox1(newValue)}
          />
          <Text>
            I agree to the <Text>Terms</Text> and <Text>Privacy Policy *</Text>
          </Text>
        </View>
        <View style={[registerStyles.rowContainer, registerStyles.checkbox]}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={newValue => setToggleCheckBox2(newValue)}
          />
          <Text>Subscribe for select product updates.</Text>
        </View>
        <Buttons label="Up" />
        <View style={registerStyles.rowContainer}>
          <Text style={registerStyles.textLogin}>Already have an account?</Text>
          <Link to={{screen: 'Login'}} style={registerStyles.TextLoginLink}>
            Sign in
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register;
