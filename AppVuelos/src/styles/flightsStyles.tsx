import { StyleSheet } from "react-native";
import { accentColor, blackColor, secondaryColor } from "./colors";

const FlightStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCard: {
    flex: 1,
    marginTop: 10,
  },
  columns: {
    flexDirection: "row",
    borderBottomColor: secondaryColor,
    borderBottomWidth: 1,
  },
  departure: {
    alignItems: "flex-start",
    flex:1,
  },
  icon: {
    alignItems: "center",
    flex:1,
    marginTop: 20,
  },
  arrival: {
    alignItems: "flex-end",
    flex:1,
  },
  locations: {
    fontWeight: "bold",
    color: blackColor,
    fontSize: 35,
  },
  state: {
    color: secondaryColor,
    paddingBottom: 5,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: blackColor,
    borderBottomWidth: 1,
  },
  detailsText: {
    color: blackColor,
  }
});

export default FlightStyles;