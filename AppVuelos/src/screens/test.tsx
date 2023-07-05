import React from 'react';
import {View, Text, Pressable} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import handleLogOut from '../hooks/HandleLogOut';

function Test(): JSX.Element {
  const navigation = useNavigation<any>();

  const handleOnLogOut = async () => {
    console.log('handleOnLogOut executed');
    try {
      console.log('Before handleLogOut');
      await handleLogOut();
      console.log('After handleLogOut');
      navigation.replace('Login');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View>
      <Text>Welcome</Text>
      <Pressable onPress={handleOnLogOut}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  );
}

export default Test;
