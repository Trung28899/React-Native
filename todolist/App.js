import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AddItemSection from "./container/AddItemSection";
import ToDoItemSection from "./container/ToDoItemSection";
import CompletedItemSection from "./container/CompletedItemSection";
import GoalModal from "./container/ToDoModal";
import { Colors } from "./constant/colors";
import { useToDo } from "./hooks/useToDo";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {
    toDoItems,
    addToDoHandler,
    toggleItemHandler,
    updateAppDate,
    deleteItemHandler,
  } = useToDo();

  function openAddToDoItem() {
    setModalIsOpen(true);
  }

  function closeAddToDoItemModal() {
    setModalIsOpen(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <AddItemSection
        openModal={openAddToDoItem}
        updateAppDate={updateAppDate}
      />
      <ToDoItemSection
        toDoItems={toDoItems}
        completeItem={toggleItemHandler}
        deleteItem={deleteItemHandler}
      />
      <CompletedItemSection
        toDoItems={toDoItems}
        putBackItem={toggleItemHandler}
        deleteItem={deleteItemHandler}
      />

      <View style={styles.holder} />

      <GoalModal
        visible={modalIsOpen}
        closeModal={closeAddToDoItemModal}
        onAddItem={addToDoHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    alignItems: "stretch",
    justifyContent: "center",
  },
  holder: {
    flex: 0.25,
  },
});
