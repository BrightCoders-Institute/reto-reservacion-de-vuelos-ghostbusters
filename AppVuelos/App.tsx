/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/screens/register';
import Login from './src/screens/login';
import MyFlights from './src/screens/myFlights';
import Booking from './src/screens/booking';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        /* initialRouteName="Login" */
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyFlights" component={MyFlights} />
        <Stack.Screen name="Booking" component={Booking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
