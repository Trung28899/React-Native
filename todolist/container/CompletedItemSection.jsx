import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Colors } from "../constant/colors";
import ListItem from "../components/ListItem";
const CheckedImage = require("../assets/checked.png");

export default function CompletedItems({ toDoItems, putBackItem, deleteItem }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(toDoItems.filter((item) => item.completed === true));
  }, [toDoItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Goals</Text>
      <FlatList
        style={styles.flatListContainer}
        data={items}
        renderItem={(itemData) => {
          return (
            <ListItem
              count={itemData.index + 1}
              onPress={() => putBackItem(itemData.item.id, false)}
              onLongPress={() => deleteItem(itemData.item.id)}
              style={styles.listItem}
              iconSource={CheckedImage}
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
    color: Colors.darkGreen,
    fontWeight: "800",
  },
  flatListContainer: {
    marginTop: 30,
  },
  listItem: {
    backgroundColor: Colors.darkGreen,
  },
});
