import {StyleSheet} from 'react-native';
import {primaryColor, secondaryColor, blackColor} from './colors';

const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    color: primaryColor,
    fontSize: 30,
    fontWeight: '900',
    marginVertical: 30,
  },
  rowContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  checkbox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  passwordDetails: {
    color: blackColor,
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

export default registerStyles;
