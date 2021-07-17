import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import defaultStyles from "../../config/styles";

function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: defaultStyles.colors.black,
    textTransform: "uppercase",
  },
});
export default Button;
