// firebaseUtils.js

import firestore from '@react-native-firebase/firestore';

export const uploadDataToFirebase = async (
  departurecity,
  departurestate,
  destinationcity,
  destinationstate,
  passangers,
  date,
  userId,
) => {
  const data = {
    departurecity,
    departurestate,
    destinationcity,
    destinationstate,
    passangers,
    date,
    userId,
  };

  try {
    await firestore().collection('vuelos').add(data);
    console.log('Data uploaded to firebase');
  } catch (error) {
    console.log(error);
  }
};
