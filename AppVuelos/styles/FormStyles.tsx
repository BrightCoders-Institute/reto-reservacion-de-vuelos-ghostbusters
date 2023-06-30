import {StyleSheet} from 'react-native';
import {primaryColor, secondaryColor, accentColor} from './colors';

const FormStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  passwordError: {
    color: 'red',
    marginBottom: '10',
  },
  title: {
    color: primaryColor,
    fontSize: 30,
    fontWeight: '900',
  },
  marginContainer: {
    marginVertical: 30,
    columnGap: 10,
  },
  rowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  checkbox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
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

export default FormStyles;
