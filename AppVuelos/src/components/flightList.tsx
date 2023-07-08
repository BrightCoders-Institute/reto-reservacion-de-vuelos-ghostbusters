import React from 'react';
import {TextInput, View, Text, FlatList} from 'react-native';
import inputStyles from '../styles/InputStyles';
import Flight from './flight';
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

interface FlightListProps {
  flights: Reservation[];
}

const FlightList: React.FC<FlightListProps> = ({flights}) => {
  const renderItem = ({ item }: { item: Reservation }) => {
    return <Flight reservation={item} />;
  };
  return (
      <FlatList
      style={FlightStyles.container}
      data={flights}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      />
  );
};

export default FlightList;
