import {StyleSheet} from 'react-native';

const inputStyles = StyleSheet.create({
  input: {
    borderColor: '#9FA9FB',
    borderWidth: 2,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  label: {
    color: '#929292',
    fontSize: 18,
    fontWeight: '600',
  },
  passwordInputContainer: {
    borderColor: '#9FA9FB',
    borderWidth: 2,
    marginBottom: 15,
    marginTop: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordField: {
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '90%',
  },
});

export default inputStyles;
