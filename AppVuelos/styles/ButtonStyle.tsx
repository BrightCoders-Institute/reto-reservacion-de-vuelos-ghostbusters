import {StyleSheet} from 'react-native';

const buttonStyles = StyleSheet.create({
  buttonContainer: {
    rowGap: 20,
    marginTop: 20,
  },
  rowContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#5C6EF8',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 3,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'space-between',
  },
  textNormal: {
    color: '#929292',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default buttonStyles;
