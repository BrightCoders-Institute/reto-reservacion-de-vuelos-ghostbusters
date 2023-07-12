import React from 'react';
import {useState} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {primaryColor} from '../styles/colors';
import BookingStyles from '../styles/bookingStyles';
import Flight from '../components/flight';
import SelectComponent from '../components/selectComponent';

function Booking(): JSX.Element {
  const [date, setDate] = useState('');
  const [departureCity, setDepartureCity] = useState('BEG');
  const [departureState, setDepartureState] = useState('Serbia');
  const [destinationCity, setDestinationCity] = useState('AMS');
  const [destinationState, setDestinationState] = useState('Netherlands');
  const [passangers, setPassangers] = useState(2);
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={BookingStyles.container}>
      <Pressable onPress={() => navigation.replace('MyFlights')}>
        <Ionicons style={{alignSelf: 'flex-start'}} name="chevron-back" size={30} color={primaryColor} />
      </Pressable>
      <View style={BookingStyles.bookingContainer}>
        <View style={BookingStyles.body}>
          <Flight
            date={date}
            departurecity={departureCity}
            departurestate={departureState}
            destinationcity={destinationCity}
            destinationstate={destinationState}
            passengers={passangers}
          />
          {/* <View>
            <Text style={BookingStyles.text}>Where are you now?</Text>
            <SelectComponent />
          </View> */}
          <View>
            <Text style={BookingStyles.text}>Where will you be flying to?</Text>
            <SelectComponent />
          </View>
        </View>
        <Pressable style={BookingStyles.button}>
          <Text style={BookingStyles.textButton}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Booking;
