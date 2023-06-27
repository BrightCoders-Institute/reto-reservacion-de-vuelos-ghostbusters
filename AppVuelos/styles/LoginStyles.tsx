import {StyleSheet} from 'react-native';
import {primaryColor, accentColor, secondaryColor} from './colors';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    color: primaryColor,
    fontSize: 30,
    fontWeight: '900',
  },
  rowContainer: {
    marginVertical: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  checkbox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  passwordDetails: {
    color: accentColor,
    marginBottom: 20,
    marginTop: -10,
  },
  textLogin: {
    color: secondaryColor,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  TextLoginLink: {
    color: primaryColor,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

export default loginStyles;
