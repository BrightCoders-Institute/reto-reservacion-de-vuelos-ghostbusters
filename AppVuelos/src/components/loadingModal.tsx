import React from 'react';
import {View, Text} from 'react-native';
import loadingStyles from '../styles/loadingModalStyles';
import {Modal, ActivityIndicator} from 'react-native';
import {primaryColor} from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface InputProps {
  visible: boolean;
  message: string;
  complated: boolean;
  confirmation: string;
  icon: string;
}

const LoadingModal: React.FC<InputProps> = ({
  visible,
  complated,
  message,
  confirmation,
  icon,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <Modal transparent visible={visible}>
      <View style={loadingStyles.Modalcontainer}>
        <View style={loadingStyles.confirmationContainer}>
          {complated ? (
            <>
              <Ionicons name={icon} size={60} color={primaryColor} />
              <Text style={loadingStyles.label}>{confirmation}</Text>
            </>
          ) : (
            <>
              <ActivityIndicator size={60} color={primaryColor} />
              <Text style={loadingStyles.label}>{message}...</Text>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
