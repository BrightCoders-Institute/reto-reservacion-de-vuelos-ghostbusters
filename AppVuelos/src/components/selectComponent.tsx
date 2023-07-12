import React from "react";
import {View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import placesData from "../data/places.json";
import SelectStyles from "../styles/selectComponentStyles";

const SelectComponent = () => {
  const flights = placesData.flights;

  const [selectedFlight, setSelectedFlight] = React.useState(null);

  return (
    <View style={SelectStyles.pickerStyle}>
      <Picker
        selectedValue={selectedFlight}
        onValueChange={(itemValue) => setSelectedFlight(itemValue)}
        placeholder="Select location"
      >
        <Picker.Item label="Select location" value={null} style={SelectStyles.pickerItemStyle}/>
        {flights.map((flight) => (
          <Picker.Item
            key={flight.id}
            label={`${flight.cityName}, ${flight.countryName}`}
            value={flight.id}
          />
        ))}
      </Picker>
    </View>
  );
}

export default SelectComponent;