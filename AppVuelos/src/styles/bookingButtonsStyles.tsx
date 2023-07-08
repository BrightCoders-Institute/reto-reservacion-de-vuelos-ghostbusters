import { StyleSheet } from "react-native";
import { primaryColor, whiteColor } from "./colors";

const bookingButtonsStyles = StyleSheet.create({
  button: {
    backgroundColor: primaryColor,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },
});

export default bookingButtonsStyles;