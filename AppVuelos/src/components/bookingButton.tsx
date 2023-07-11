import React from "react";
import {Text, Pressable} from "react-native";
import bookingButtonsStyles from "../styles/bookingButtonsStyles";
import myFlightsStyles from "../styles/myFlightsStyles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { whiteColor } from "../styles/colors";

const BookingButton = () => {
  return (
    <Pressable style={bookingButtonsStyles.button}>
      <FontAwesome5 name="plus" size={30} color={whiteColor}/>
    </Pressable>
  );
}

export default BookingButton;