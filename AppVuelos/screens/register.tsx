import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Input from '../components/Input';
import {Link} from '@react-navigation/native';
import Buttons from '../components/buttons';
import registerStyles from '../styles/RegisterStyles';

function Register(): JSX.Element {
  return (
    <SafeAreaView style={registerStyles.container}>
      <Text style={registerStyles.title}>Sign up</Text>
      <View>
        <Input label="First Name" />
        <Input label="Email*" />
        <Input label="Password*" />
        <Text style={registerStyles.passwordDetails}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
        <View style={[registerStyles.rowContainer, registerStyles.checkbox]}>
          <CheckBox />
          <Text>
            I agree to the <Text>Terms</Text> and <Text>Privacy Policy *</Text>
          </Text>
        </View>
        <View style={[registerStyles.rowContainer, registerStyles.checkbox]}>
          <CheckBox />
          <Text>Subscribe for select product updates.</Text>
        </View>
        <Buttons label="Up" />
        <View style={registerStyles.rowContainer}>
          <Text style={registerStyles.textLogin}>
            'Already have an account?'
          </Text>
          <Link to={{screen: 'Login'}} style={registerStyles.TextLoginLink}>
            Sign in
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register;
