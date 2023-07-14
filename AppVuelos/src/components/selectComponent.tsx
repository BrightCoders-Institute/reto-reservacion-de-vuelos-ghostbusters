import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import placesData from "../data/places.json";
import SelectStyles from "../styles/selectComponentStyles";

interface Flight {
  id: number;
  cityAbbreviation: string;
  cityName: string;
  countryName: string;
}

interface SelectProps {
  city: string;
  state: string;
  setCity: (city: string) => void;
  setState: (state: string) => void;
}

const SelectComponent: React.FC<SelectProps> = ({ city, state, setCity, setState }) => {
  const flights = placesData.flights;

  const [selectedFlight, setSelectedFlight] = React.useState<number>();

  const handleFlightSelection = (itemValue: number) => {
    const selectedFlight = flights.find((flight) => flight.id === itemValue);
    setSelectedFlight(itemValue);
    setCity(selectedFlight?.cityAbbreviation || '');
    setState(selectedFlight?.countryName || '');
  };

  return (
    <View style={SelectStyles.pickerStyle}>
      <Picker
        selectedValue={selectedFlight}
        onValueChange={handleFlightSelection}
        placeholder="Select location"
      >
        <Picker.Item
          label="Select location"
          value={null}
          style={SelectStyles.pickerItemStyle}
        />
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
};

export default SelectComponent;
