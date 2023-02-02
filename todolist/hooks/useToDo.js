import { useState, useEffect, useMemo } from "react";
import { findAndUpdateArray } from "../utils/helper";
import { storeData, getDataByKey } from "../utils/local_storage_helper";
import DayData from "../model/daydata";
import ToDo from "../model/todo";

export const useToDo = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const [date, setDate] = useState(new Date());

  const timeKey = useMemo(
    () => `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
    [date]
  );

  function updateAppDate(date) {
    setDate(date);
  }

  async function addToDoHandler(enteredToDoText) {
    const newItem = new ToDo(new Date().getTime().toString(), enteredToDoText);
    const newArray = [...toDoItems, newItem];
    const newDayData = new DayData(timeKey, newArray);

    setToDoItems(newArray);
    await storeData(timeKey, newDayData);
  }

  async function toggleItemHandler(id, updateValue = true) {
    const updatedArray = findAndUpdateArray(
      toDoItems,
      { findKey: "id", findValue: id },
      { updateKey: "completed", updateValue: updateValue }
    );

    setToDoItems([...updatedArray]);
    const newDayData = new DayData(timeKey, updatedArray);
    await storeData(timeKey, newDayData);
  }

  async function deleteItemHandler(id) {
    const newArray = [...toDoItems.filter((item) => item.id !== id)];

    setToDoItems([...newArray]);
    const newDayData = new DayData(timeKey, newArray);
    await storeData(timeKey, newDayData);
  }

  useEffect(() => {
    async function setDataFromLocalStorage() {
      const data = await getDataByKey(timeKey);
      if (data) {
        setToDoItems(data.toDoArray);
      } else {
        setToDoItems([]);
      }
    }

    setDataFromLocalStorage();
  }, [timeKey]);

  return {
    toDoItems: toDoItems,
    addToDoHandler,
    toggleItemHandler,
    deleteItemHandler,
    updateAppDate,
  };
};
