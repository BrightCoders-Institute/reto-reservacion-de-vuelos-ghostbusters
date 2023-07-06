import {StyleSheet} from 'react-native';
import {darkGray, primaryColor} from './colors';

const loadingStyles = StyleSheet.create({
  Modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  confirmationContainer: {
    backgroundColor: darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    rowGap: 10,
  },
  label: {
    color: primaryColor,
    fontWeight: '600',
    fontSize: 18,
  },
});

export default loadingStyles;
