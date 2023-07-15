import React from 'react';
import {useState} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookingStyles from '../styles/bookingStyles';
import Flight from '../components/flight';
import SelectComponent from '../components/selectComponent';
import {Calendar} from 'react-native-calendars';
import {primaryColor, blackColor} from '../styles/colors';
import HandleNext from '../hooks/handleNext';
import PassangersPicker from '../components/passangersPicker';
import { uploadDataToFirebase } from '../hooks/firebaseUtils';

import auth from '@react-native-firebase/auth';

function Booking(): JSX.Element {
  const [date, setDate] = useState('');
  const [departurecity, setDepartureCity] = useState('');
  const [departurestate, setDepartureState] = useState('');
  const [destinationcity, setDestinationCity] = useState('');
  const [destinationstate, setDestinationState] = useState('');
  const [passangers, setPassangers] = useState(0);
  const navigation = useNavigation<any>();
  const [selectedDate, setSelectedDate] = useState('');
  const {step, setStep, nextClick, texTitle, buttonTitle, formatDate} =
    HandleNext();

  const handleUploadData = async () => {
    try {
      const user = auth().currentUser;
      if (user) {
        const userId = user.uid;
        await uploadDataToFirebase(
          departurecity,
          departurestate,
          destinationcity,
          destinationstate,
          passangers,
          date,
          userId
        );
        navigation.replace('MyFlights');
      } else {
        console.log('No user is currently authenticated');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const isStepValid = () => {
    switch (step) {
      case 0:
        return departurecity !== '' && departurestate !== '';
      case 1:
        return destinationcity !== '' && destinationstate !== '';
      case 2:
        return date !== '';
      case 3:
        return passangers > 0;
      default:
        return true;
    }
  };

  return (
    <SafeAreaView style={BookingStyles.background}>
      <View style={BookingStyles.container}>
        <Pressable onPress={() => navigation.replace('MyFlights')}>
          <Ionicons style={{alignSelf: 'flex-start'}} name="chevron-back" size={30} color={primaryColor} />
        </Pressable>
        <View style={BookingStyles.bookingContainer}>
          <View style={BookingStyles.body}>
            <Flight
              date={date}
              departurecity={departurecity}
              departurestate={departurestate}
              destinationcity={destinationcity}
              destinationstate={destinationstate}
              passengers={passangers}
            />
            <View>
              <Text style={BookingStyles.text}>{texTitle()}</Text>
              {step === 0 && (
                <SelectComponent
                  city={departurecity}
                  setCity={setDepartureCity}
                  state={departurestate}
                  setState={setDepartureState}
                />
              )}
              {step === 1 && (
                <SelectComponent
                  city={destinationcity}
                  setCity={setDestinationCity}
                  state={destinationstate}
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
          <Pressable style={[
            BookingStyles.button,
            { backgroundColor: isStepValid() ? primaryColor : 'gray' },
          ]} 
            onPress={() => {
              if (step === 4) {
                handleUploadData();
              } else {
                nextClick();
              }
            }}
            disabled={!isStepValid()}>
            <Text style={BookingStyles.textButton}>{buttonTitle()}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Booking;
