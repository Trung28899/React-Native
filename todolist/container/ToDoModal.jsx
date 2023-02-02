import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

function GoalInput({ onAddItem, closeModal, visible }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function itemInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addItemHandler() {
    onAddItem(enteredGoalText);
    setEnteredGoalText("");
    closeModal();
  }

  return (
    <Modal visible={visible} animationType="fade">
      <StatusBar style="light" />
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal !"
          onChangeText={itemInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addItemHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#311b6b",
    paddingTop: 200,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    borderRadius: 6,
    marginRight: 8,
    padding: 16,
    color: "#120438",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
