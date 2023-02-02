import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ onDeleteItem, text, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
    paddingHorizontal: 16,
  },
  pressedItem: {
    opacity: "0.8",
    backgroundColor: "#dddddd",
  },
});
