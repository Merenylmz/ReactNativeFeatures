import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";

const IconButton = ({icon, size, color, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={size} color={color}/>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
