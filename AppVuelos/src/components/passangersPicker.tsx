import React from 'react';
import {useState} from 'react';
import {primaryColor, whiteColor, blackColor} from '../styles/colors';
import WheelPicker from 'react-native-wheely';

interface PickerProps {
  passangers: number;
  setPassangers: (passangers: number) => void;
}

const PassangersPicker: React.FC<PickerProps> = ({ passangers, setPassangers}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <WheelPicker
      selectedIndex={selectedIndex}
      options={['1', '2', '3', '4', '5', '6']}
      onChange={index => {
        setPassangers(index+1);
        setSelectedIndex(index);
      }}
      containerStyle={{marginHorizontal: 100}}
      itemTextStyle={{
        fontSize: 25,
        fontWeight: '900',
        color: blackColor,
      }}
      selectedIndicatorStyle={{
        borderLeftColor: primaryColor,
        borderLeftWidth: 1,
        borderRightColor: primaryColor,
        borderRightWidth: 1,
        backgroundColor: whiteColor,
      }}
    />
  );
}

export default PassangersPicker;
