import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constant/colors";

const CustomButton = ({ children, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, { ...style }]} onPress={onPress}>
      <Text style={[styles.buttonText, { ...textStyle }]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 6,
  },
  buttonText: {
    fontWeight: "500",
  },
});

export default CustomButton;
