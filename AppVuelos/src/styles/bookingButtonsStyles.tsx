import { StyleSheet } from "react-native";
import { primaryColor, whiteColor } from "./colors";

const bookingButtonsStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: primaryColor,
  },
  icon: {
    fontSize: 30,
  },
});

export default bookingButtonsStyles;