import {StyleSheet} from 'react-native';

const inputStyles = StyleSheet.create({
  input: {
    borderColor: '#9FA9FB',
    borderWidth: 2,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 5,
    padding: 8,
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
    fontSize: 16,
    fontWeight: '600',
    padding: 8,
    width: '90%',
  },
  labelerror: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginLeft: 10,
    fontWeight: '300',
  },
});

export default inputStyles;
