import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native";
import { Colors } from "../constant/colors";

export default function ToDoItem({
  children,
  style,
  textStyle,
  iconSource,
  count,
  onPress,
  onLongPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={[styles.container, { ...style }]}>
        {iconSource ? (
          <Image source={iconSource} style={styles.imageStyle} />
        ) : (
          <Text style={[styles.textStyle, { ...textStyle }]}>{count}.</Text>
        )}
        <View style={styles.contentContainer}>
          <Text style={[styles.textStyle, { ...textStyle }]}>{children}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkRed,
    width: 320,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 16,
    borderRadius: 6,
    marginVertical: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "600",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
});
