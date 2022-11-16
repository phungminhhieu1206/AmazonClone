import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

const ButtonCustom = ({text, onPress, containerStyles}) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ButtonCustom;
