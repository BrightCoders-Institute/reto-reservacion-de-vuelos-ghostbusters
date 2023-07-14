import React from "react";
import {Pressable, View} from "react-native";
import bookingButtonsStyles from "../styles/bookingButtonsStyles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { whiteColor } from "../styles/colors";
import {useNavigation} from '@react-navigation/native';

const BookingButton = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
        <Pressable onPress={() => navigation.navigate("Booking")} style={bookingButtonsStyles.button}>
          <FontAwesome5 name="plus" size={30} color={whiteColor}/>
        </Pressable>
    </View>
  );
}

export default BookingButton;