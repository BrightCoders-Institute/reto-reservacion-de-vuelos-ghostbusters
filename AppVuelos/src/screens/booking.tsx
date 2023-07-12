import React from 'react';
import {useState} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {primaryColor} from '../styles/colors';
import BookingStyles from '../styles/bookingStyles';
import Flight from '../components/flight';
import SelectComponent from '../components/selectComponent';

function Booking(): JSX.Element {
  const [date, setDate] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [departureState, setDepartureState] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [destinationState, setDestinationState] = useState('');
  const [passangers, setPassangers] = useState(0);
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={BookingStyles.container}>
      <Pressable onPress={() => navigation.replace("MyFlights")}>
        <Ionicons name="chevron-back" size={30} color={primaryColor} />
      </Pressable>
      <Flight
        date={date}
        departurecity={departureCity}
        departurestate={departureState}
        destinationcity={departureCity}
        destinationstate={destinationState}
        passengers={passangers}
      />
    </SafeAreaView>
  );
}

export default Booking;
