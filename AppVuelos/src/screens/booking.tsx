import React from 'react';
import {useState} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookingStyles from '../styles/bookingStyles';
import Flight from '../components/flight';
import SelectComponent from '../components/selectComponent';
import {Calendar} from 'react-native-calendars';
import {primaryColor, whiteColor, blackColor} from '../styles/colors';
import WheelPicker from 'react-native-wheely';
import HandleNext from '../hooks/handleNext';
import PassangersPicker from '../components/passangersPicker';

function Booking(): JSX.Element {
  const [date, setDate] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [departureState, setDepartureState] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [destinationState, setDestinationState] = useState('');
  const [passangers, setPassangers] = useState(0);
  const navigation = useNavigation<any>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const {step, setStep, nextClick, texTitle, buttonTitle, formatDate} =
    HandleNext();

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
            <View>
              <Text style={BookingStyles.text}>{texTitle()}</Text>
              {step === 0 && (
                <SelectComponent
                  city={departureCity}
                  setCity={setDepartureCity}
                  state={departureState}
                  setState={setDepartureState}
                />
              )}
              {step === 1 && (
                <SelectComponent
                  city={destinationCity}
                  setCity={setDestinationCity}
                  state={destinationState}
                  setState={setDestinationState}
                />
              )}
              {step === 2 && (
                <Calendar
                  onDayPress={day => {
                    setDate(formatDate(day.dateString));
                    setSelectedDate(day.dateString);
                    console.log('selected day', day);
                  }}
                  minDate="2023-07-12"
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
              )}
              {step === 3 && (
                <PassangersPicker passangers={passangers} setPassangers={setPassangers}/>
              )}
            </View>
          </View>
          <Pressable style={BookingStyles.button} onPress={nextClick}>
            <Text style={BookingStyles.textButton}>{buttonTitle()}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Booking;
