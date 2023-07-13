import React from 'react';
import {useState} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookingStyles from '../styles/bookingStyles';
import Flight from '../components/flight';
import SelectComponent from '../components/selectComponent';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {primaryColor, whiteColor, blackColor, accentColor} from '../styles/colors';
import WheelPicker from 'react-native-wheely';

function Booking(): JSX.Element {
  const [date, setDate] = useState('10 Jun, 2023');
  const [departureCity, setDepartureCity] = useState('BEG');
  const [departureState, setDepartureState] = useState('Serbia');
  const [destinationCity, setDestinationCity] = useState('AMS');
  const [destinationState, setDestinationState] = useState('Netherlands');
  const [passangers, setPassangers] = useState(2);
  const navigation = useNavigation<any>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <SafeAreaView style={BookingStyles.background}>
      <View style={BookingStyles.container}>
        <Pressable onPress={() => navigation.replace('MyFlights')}>
          <Ionicons
            style={{alignSelf: 'flex-start'}}
            name="chevron-back"
            size={30}
            color={primaryColor}
          />
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
            <Text style={BookingStyles.text}>Your request was received.</Text>
            {/* <View>
            <Text style={BookingStyles.text}>Where are you now?</Text>
            <SelectComponent />
          </View> */}
            {/* <View>
            <Text style={BookingStyles.text}>Where will you be flying to?</Text>
            <SelectComponent />
          </View> */}
            {/* <View>
              <Text style={BookingStyles.text}>Select date</Text>
              <Calendar
                onDayPress={day => {
                  setSelectedDate(day.dateString);
                  console.log('selected day', day);
                }}
                minDate='2023-07-12'
                markedDates={{
                  [selectedDate]: {selected: true, dotColor: primaryColor},
                }}
                theme={{
                  todayTextColor: blackColor,
                  textMonthFontWeight: 'bold',
                  textMonthFontSize: 20,
                }}
                month
                />
            </View> */}
            {/* <View>
              <Text style={BookingStyles.text}>How many passengers?</Text>
              <WheelPicker
                selectedIndex={selectedIndex}
                options={['1', '2', '3', '4', '5', '6']}
                onChange={index => setSelectedIndex(index)}
                containerStyle={{marginHorizontal: 100}}
                itemTextStyle={{
                  fontSize: 25,
                  fontWeight: '900',
                  color: blackColor,
                }}
                selectedIndicatorStyle={{
                  borderLeftColor: primaryColor,
                  borderLeftWidth: 1,
                  borderRightColor: primaryColor,
                  borderRightWidth: 1,
                  backgroundColor: whiteColor,
                }}
              />
              <Text>{selectedIndex + 1}</Text>
            </View> */}
          </View>
          <Pressable style={BookingStyles.button}>
            <Text style={BookingStyles.textButton}>Next</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Booking;
