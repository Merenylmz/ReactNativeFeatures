import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons"
import Colors from "../../constants/colors";

const CustomButton = ({icon, children, onPress}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=>[styles.button, pressed && styles.pressed]}>
      <Ionicons name={icon} style={styles.icon} size={18} color={Colors.primary500}/>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
    borderRadius: 4
  },
  pressed: {
    opacity: .6
  },
  icon: {
    marginRight: 6
  },
  text: {
    color: Colors.primary500
  }
});
