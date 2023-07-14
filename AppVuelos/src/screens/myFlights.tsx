import React from 'react';
import {View, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import handleLogOut from '../hooks/HandleLogOut';
import myFlightsStyles from '../styles/myFlightsStyles';
import BookingButton from '../components/bookingButton';
import FlightList from '../components/flightList';

function Test(): JSX.Element {
  const navigation = useNavigation<any>();
  
  const handleOnLogOut = async () => {
    try {
      await handleLogOut();
      console.log('After handleLogOut'); /*Delete comments */
      navigation.replace('Login');
    } catch (error) {
      console.log('Error:', error); /*Delete comments */
    }
  };
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
