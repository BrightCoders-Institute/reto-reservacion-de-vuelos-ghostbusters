import firestore from '@react-native-firebase/firestore';

export const GetFlights = async () => {
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

export const updateFlights = async (setFlights) => {
  try {
    const flightData = await GetFlights();
    setFlights(flightData);
  } catch (error) {
    throw error;
  }
}
