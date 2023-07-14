import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {WEBCLIENT_ID} from '@env';
GoogleSignin.configure({
  webClientId:WEBCLIENT_ID,
  scopes: ['profile', 'email'],
  offlineAccess: true,
});

export const _signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const {idToken} = await GoogleSignin.signIn();
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(googleCredentials);
    console.log('=> google Sign in Sucess:', userCredential.user); /*Delete comments */
    return userCredential;
  } catch (error) {
    console.log('=> Google Sign In', error); /*Delete comments */
    return null;
  }
};
