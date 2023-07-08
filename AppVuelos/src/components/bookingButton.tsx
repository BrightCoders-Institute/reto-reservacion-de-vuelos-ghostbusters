import React from "react";
import {View, Text, Pressable} from "react-native";
import bookingButtonsStyles from "../styles/bookingButtonsStyles";

const BookingButton = () => {
  return (
    <View style={bookingButtonsStyles.container}>
      <Pressable>
        <Text style={bookingButtonsStyles.icon}>Book Flight</Text>
      </Pressable>
    </View>
  );
}
