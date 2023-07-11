import React from 'react';
import {View, Text, Pressable} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import handleLogOut from '../hooks/HandleLogOut';
import myFlightsStyles from '../styles/myFlightsStyles';
import BookingButton from '../components/bookingButton';
import Flight from '../components/flight';
import FlightList from '../components/flightList';
import firestore from '@react-native-firebase/firestore';


function Test(): JSX.Element {
  const navigation = useNavigation<any>();
  
  const handleOnLogOut = async () => {
    /* console.log('handleOnLogOut executed'); */
    try {
      /* console.log('Before handleLogOut'); */
      await handleLogOut();
      /* console.log('After handleLogOut'); */
      navigation.replace('Login');
    } catch (error) {
      /* console.log('Error:', error); */
    }
  };

  /*
  const reservations = [
    {
      id: 1,
      departure: 'NY',
      departureState: 'NY',
      arrival: 'LA',
      arrivalState: 'CA',
      date: new Date('2023-06-01'),
      passengers: 2,
    },
    {
      id: 2,
      departure: 'SF',
      departureState: 'CA',
      arrival: 'CHI',
      arrivalState: 'IL',
      date: new Date('2023-06-15'),
      passengers: 1,
    },
    {
      id: 3,
      departure: 'LA',
      departureState: 'CA',
      arrival: 'LV',
      arrivalState: 'NV',
      date: new Date('2023-06-20'),
      passengers: 4,
    },
    {
      id: 4,
      departure: 'CHI',
      departureState: 'IL',
      arrival: 'MIA',
      arrivalState: 'FL',
      date: new Date('2023-06-30'),
      passengers: 3,
    },
    {
      id: 5,
      departure: 'NY',
      departureState: 'NY',
      arrival: 'LA',
      arrivalState: 'CA',
      date: new Date('2023-06-01'),
      passengers: 2,
    },
    {
      id: 6,
      departure: 'SF',
      departureState: 'CA',
      arrival: 'CHI',
      arrivalState: 'IL',
      date: new Date('2023-06-15'),
      passengers: 1,
    },
    {
      id: 7,
      departure: 'LA',
      departureState: 'CA',
      arrival: 'LV',
      arrivalState: 'NV',
      date: new Date('2023-06-20'),
      passengers: 4,
    },
    {
      id: 8,
      departure: 'CHI',
      departureState: 'IL',
      arrival: 'MIA',
      arrivalState: 'FL',
      date: new Date('2023-06-30'),
      passengers: 3,
    },
  ];
  */
  return (
    <View style={myFlightsStyles.container}>
      <View style={myFlightsStyles.headerContainer}>
        <Text style={myFlightsStyles.title}>My Flights</Text>
        <Pressable onPress={handleOnLogOut}>
          <Text style={myFlightsStyles.logOutButton}>Log Out</Text>
        </Pressable>
      </View>
      <FlightList />
      <BookingButton />
    </View>
  );
}

export default Test;
