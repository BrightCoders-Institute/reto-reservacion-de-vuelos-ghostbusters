import { StyleSheet } from "react-native";
import { primaryColor, whiteColor, accentColor } from "./colors";

const myFlightsStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: primaryColor,
  },
  headerContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: accentColor,
    borderBottomWidth: 2,
    paddingBottom: 10
  },
  logOutButton: {
    backgroundColor: primaryColor,
    color: whiteColor,
    fontWeight: '600',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  }
});

export default myFlightsStyles;
