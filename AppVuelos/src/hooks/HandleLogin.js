import auth from '@react-native-firebase/auth';

const handleLogIn = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    /* console.log('User logged in successfully:', user); */
    return user;
  } catch (error) {
    /* console.log('Log in error', error); */
    switch (error.code) {
      case 'auth/invalid-email':
        return {typeError: 'email', message: 'That email address is invalid!'};
      case 'auth/wrong-password':
        return {typeError: 'password', message: 'Invalid password'};
    }
  }
};

export default handleLogIn;
