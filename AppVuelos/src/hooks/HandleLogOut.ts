import auth from '@react-native-firebase/auth';

const handleLogOut = async () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export default handleLogOut;
