import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {primaryColor} from '../styles/colors';
import FlightStyles from '../styles/flightsStyles';

interface Reservation {
  id: number;
  departure: string;
  departureState: string;
  arrival: string;
  arrivalState: string;
  date: Date;
  passengers: number;
}

interface FlightProps {
  reservation: Reservation;
}

const Flight: React.FC<FlightProps> = ({reservation}) => {
  const {departure, departureState, arrival, arrivalState, date, passengers} =
    reservation;
  const formatDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <View style={FlightStyles.containerCard}>
      <View style={FlightStyles.columns}>
        <View style={FlightStyles.departure}>
          <Text style={FlightStyles.locations}>{departure}</Text>
          <Text style={FlightStyles.state}>{departureState}</Text>
        </View>
        <View style={FlightStyles.icon}>
          <FontAwesome5 name="plane" size={20} color={primaryColor} />
        </View>
        <View style={FlightStyles.arrival}>
          <Text style={FlightStyles.locations}>{arrival}</Text>
          <Text style={FlightStyles.state}>{arrivalState}</Text>
        </View>
      </View>
      <View style={FlightStyles.details}>
        <Text style={FlightStyles.detailsText}>{formatDate}</Text>
        <Text style={FlightStyles.detailsText}>{passengers} passengers</Text>
      </View>
    </View>
  );
};

export default Flight;
