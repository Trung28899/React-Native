import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Colors } from "../constant/colors";

const CurrentDate = ({ updateAppDate }) => {
  const [date, setDate] = useState(new Date());

  const updateDate = (increment) => {
    setDate(new Date(date.getTime() + increment));
    updateAppDate(new Date(date.getTime() + increment));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => updateDate(-86400000)}>
        <Text style={styles.buttonText}>&lt;</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <DateTimePicker
          value={date}
          mode="date"
          display="calendar"
          onChange={(event, selectedDate) => {
            setDate(selectedDate || date);
            updateAppDate(selectedDate || date);
          }}
          style={styles.dateTimePicker}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => updateDate(86400000)}>
        <Text style={styles.buttonText}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    color: Colors.darkBlue,
    borderRadius: 6,
    marginHorizontal: 20,
  },
  dateTimePicker: {
    width: "100%",
  },
});

export default CurrentDate;
