import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native';
import Flight from './flight';
import FlightStyles from '../styles/flightsStyles';
import {GetFlights, updateFlights} from '../hooks/getFlights'
import auth from '@react-native-firebase/auth';

interface FlightList {
  userId: string;
  departurecity: string;
  departurestate: string;
  destinationcity: string;
  destinationstate: string;
  date: string;
  passangers: number;
}

const FlightList = () => {
  const user = auth().currentUser;
  const userId = user ? user.uid : '';
  const [flights, setFlights] = useState<FlightList[]>([]);

  const filteredFlights = flights.filter((flight) => flight.userId === userId);

  const handleUpdateFlights = async () => {
    try {
      await updateFlights(setFlights);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleUpdateFlights();
  }, []);

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
      passengers={item.passangers}
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
        data={filteredFlights}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyList}
      />
  );
};

export default FlightList;
