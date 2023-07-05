import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '227704013235-sin9e5qi1ik26ua90jaa5sd6uu9q9re8.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  offlineAccess: true,
});

export const _signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const {idToken} = await GoogleSignin.signIn();
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(googleCredentials);
    console.log('=> google Sign in Sucess:', userCredential.user);
    return userCredential;
  } catch (error) {
    console.log('=> Google Sign In', error);
    return null;
  }
};
