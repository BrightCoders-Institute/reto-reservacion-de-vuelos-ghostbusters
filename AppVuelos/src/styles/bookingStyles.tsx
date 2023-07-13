import { StyleSheet } from "react-native";
import { accentColor, blackColor, secondaryColor, primaryColor, whiteColor } from "./colors";

const BookingStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  background: {
    backgroundColor: whiteColor,
    flex: 1
  },
  bookingContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  body:{
    gap: 50,
    flex: 1,
  },
  button: {
    backgroundColor: secondaryColor,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 40,
    marginHorizontal: 10,
  },
  textButton:{
    textAlign: 'center',
    color: whiteColor,
    fontWeight: 'bold',
    fontSize: 14,
  },
  text: {
    color: blackColor,
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default BookingStyles;