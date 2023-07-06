import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import buttonStyles from '../styles/ButtonStyle';
import {_signInWithGoogle} from '../hooks/GoogleSignIn';
import {useNavigation} from '@react-navigation/native';
import LoadingModal from '../components/loadingModal';

interface ButtonProps {
  label: string;
  disabled: boolean;
  onPress: () => void;
}

const Buttons: React.FC<ButtonProps> = ({label, disabled, onPress}) => {
  const navigation = useNavigation<any>();
  const [visible,setvisible] =useState(false);
  const [complated, setComplated] = useState(false);

  async function googleSignIn() {
    _signInWithGoogle().then(data => {
      if (!data) {
        return;
      }
      setvisible(true);
      setTimeout(() => {
        setComplated(true);
      },500)
      setTimeout(() => {
        setvisible(false);
        navigation.replace('Test')
      },1000)
    });
  }

  return (
    <View style={buttonStyles.buttonContainer}>
      <Pressable
        style={[buttonStyles.button, disabled && buttonStyles.disabledButton]}
        disabled={disabled}
        onPress={onPress}>
        <Text style={buttonStyles.buttonText}>Sign {label}</Text>
      </Pressable>
      <Text style={buttonStyles.textNormal}>or</Text>
      <Pressable style={buttonStyles.button} onPress={() => googleSignIn()}>
        <Ionicons name="logo-google" size={22} color={'#fff'} />
        <Text style={buttonStyles.buttonText}> Sign {label} with Google</Text>
      </Pressable>
      <LoadingModal visible={visible} message='Signing Up' confirmation='Signed Up' complated={complated}/>
    </View>
  );
};

export default Buttons;
