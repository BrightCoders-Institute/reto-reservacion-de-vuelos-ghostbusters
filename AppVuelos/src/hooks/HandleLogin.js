import auth from '@react-native-firebase/auth';

const handleLogIn = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    switch (error.code) {
      case 'auth/invalid-email':
        return {typeError: 'email', message: 'That email address is invalid!'};
      case 'auth/wrong-password':
        return {typeError: 'password', message: 'Invalid password'};
    }
  }
};

export default handleLogIn;
