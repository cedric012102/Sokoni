import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../utils/colors';
import {styles} from './styles/button-style';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...styles.btnContainer, backgroundColor: COLORS.white}}>
        <Text style={{...styles.title, color: COLORS.primary}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {PrimaryButton, SecondaryButton};
