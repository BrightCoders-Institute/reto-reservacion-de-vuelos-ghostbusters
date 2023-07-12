import { StyleSheet } from "react-native";
import { accentColor, blackColor, secondaryColor, primaryColor, whiteColor } from "./colors";

const BookingStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  bookingContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  body:{
    gap: 80,
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
  }
});

export default BookingStyles;