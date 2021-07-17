import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Circles(props) {
  return (
    <View style={styles.circleContainer}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
    </View>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  circle1: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.darkGrey,
    marginHorizontal: 5,
  },
  circle2: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  circle3: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.darkGrey,
    marginHorizontal: 5,
  },
});
export default Circles;
