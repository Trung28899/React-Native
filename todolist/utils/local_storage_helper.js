import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

/*
  NOTE: The helper functions in this file only deal with key is a string and value is an object
  if the value is a string or any other type of data than object, these function won't work
  because the JSON.parse will break the code
*/

// Create and Update in CRUD
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

// Read in CRUD
export const getAllData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);
    return items;
  } catch (error) {
    console.error(error);
  }
};

// Read in CRUD
export const getDataByKey = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error(error);
  }
};

// Delete in CRUD
export const deleteDataByKey = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
