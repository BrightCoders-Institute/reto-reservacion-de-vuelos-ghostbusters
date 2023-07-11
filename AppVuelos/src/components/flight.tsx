import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {primaryColor} from '../styles/colors';
import FlightStyles from '../styles/flightsStyles';

interface FlightProps {
  date: string;
  departurecity: string;
  departurestate: string;
  destinationcity: string;
  destinationstate: string;
  passengers: number;
}

const Flight:React.FC<FlightProps> = ({
  date,
  departurecity,
  departurestate,
  destinationcity,
  destinationstate,
  passengers,
}) => {
  return (
    <View style={FlightStyles.containerCard}>
      <View style={FlightStyles.columns}>
        <View style={FlightStyles.departure}>
          <Text style={FlightStyles.locations}>{departurecity}</Text>
          <Text style={FlightStyles.state}>{departurestate}</Text>
        </View>
        <View style={FlightStyles.icon}>
          <FontAwesome5 name="plane" size={20} color={primaryColor} />
        </View>
        <View style={FlightStyles.arrival}>
          <Text style={FlightStyles.locations}>{destinationstate}</Text>
          <Text style={FlightStyles.state}>{destinationcity}</Text>
        </View>
      </View>
      <View style={FlightStyles.details}>
        <Text style={FlightStyles.detailsText}>{date}</Text>
        <Text style={FlightStyles.detailsText}>{passengers} passengers</Text>
      </View>
    </View>
  );
};

export default Flight;
