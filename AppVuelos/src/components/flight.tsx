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

const Flight: React.FC<FlightProps> = ({
  date,
  departurecity,
  departurestate,
  destinationcity,
  destinationstate,
  passengers,
}) => {
  return (
    <View>
      <View style={FlightStyles.columns}>
        <View style={FlightStyles.departure}>
          <Text style={FlightStyles.locations}>{departurecity}</Text>
          <Text style={FlightStyles.state}>{departurestate}</Text>
        </View>
        <View style={FlightStyles.icon}>
          {departurecity.length !== 0 && departurestate.length !== 0 && (
            <FontAwesome5 name="plane" size={20} color={primaryColor} />
          )}
        </View>
        <View style={FlightStyles.arrival}>
          <Text style={FlightStyles.locations}>{destinationcity}</Text>
          <Text style={FlightStyles.state}>{destinationstate}</Text>
        </View>
      </View>
      {destinationcity.length !== 0 ? (
        <View style={FlightStyles.details}>
          <Text style={FlightStyles.detailsText}>{date}</Text>
          {passengers !== 0 && (
            <Text style={FlightStyles.detailsText}>
              {passengers} passengers
            </Text>
          )}
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Flight;
