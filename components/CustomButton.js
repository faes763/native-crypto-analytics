import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, backgroundColor, textColor, disabled }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? 'gray' : backgroundColor },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 10,
    borderWidth:1,
    borderColor:"#fff",
    width:"50%",
    marginLeft: "auto",
    marginRight:"auto"
  },
  buttonText: {
    fontSize: 16,
    fontFamily:"jo-bold"
  },
});

export default CustomButton;