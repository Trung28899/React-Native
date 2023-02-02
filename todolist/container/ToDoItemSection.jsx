import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Colors } from "../constant/colors";
import ListItem from "../components/ListItem";

export default function ToDoItemSection({
  toDoItems,
  completeItem,
  deleteItem,
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(toDoItems.filter((item) => item.completed === false));
  }, [toDoItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remaining Goals</Text>
      <FlatList
        style={styles.flatListContainer}
        data={items}
        renderItem={(itemData) => {
          return (
            <ListItem
              count={itemData.index + 1}
              onPress={() => completeItem(itemData.item.id)}
              onLongPress={() => deleteItem(itemData.item.id)}
            >
              {itemData.item.text}
            </ListItem>
          );
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: Colors.darkRed,
    fontWeight: "800",
  },
  flatListContainer: {
    marginTop: 30,
  },
});
