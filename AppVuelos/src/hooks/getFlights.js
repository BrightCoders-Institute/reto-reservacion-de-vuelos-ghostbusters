import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const GetFlights = async () => {
  try {
    const collection = await firestore()
      .collection('vuelos')
      .get();
    const reservations = [];
    collection.forEach(documentSnapshot => {
      const flight = documentSnapshot.data();
      reservations.push(flight);
    });
    return reservations;
  } catch (error) {
    throw error;
  }
};

export default GetFlights;
