import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native';
import Flight from './flight';
import FlightStyles from '../styles/flightsStyles';
import GetFlights from '../hooks/getFlights';

interface FlightList {
  id: number;
  departurecity: string;
  departurestate: string;
  destinationcity: string;
  destinationstate: string;
  date: string;
  passengers: number;
}

const FlightList = () => {
  const [flights, setFlights] = useState<FlightList[]>([]);

  useEffect(() => {
    const getFlightsData = async () => {
      try {
        const flightData = await GetFlights();
        setFlights(flightData);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };
    getFlightsData();
  }, []);

  const renderItem = ({ item }: { item: FlightList }) => {
    return <Flight 
      date={item.date} 
      departurestate={item.departurestate} 
      departurecity={item.departurecity} 
      destinationcity={item.destinationcity}
      destinationstate={item.destinationstate}
      passengers={item.passengers}
    />;
  };

  const renderEmptyList = (): JSX.Element => {
    return (
      <View>
        <Text>No Flights Found</Text>
      </View>
    );
  };

  return (
      <FlatList
        style={FlightStyles.container}
        data={flights}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyList}
      />
  );
};

export default FlightList;
