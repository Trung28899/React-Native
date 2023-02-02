import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import { Colors } from "../constant/colors";
import Date from "../components/Date";

export default function AddItemSection({ openModal, updateAppDate }) {
  return (
    <View style={styles.container}>
      <Date updateAppDate={updateAppDate} />
      <Button
        style={styles.buttonStyle}
        textStyle={styles.textStyle}
        onPress={openModal}
      >
        Add Goal
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: Colors.darkBlue,
    paddingVertical: 12,
    paddingHorizontal: 48,
  },
  textStyle: {
    fontWeight: "800",
    color: Colors.white,
  },
});
