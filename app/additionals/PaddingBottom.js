import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

const PaddingBottom = () => {
  return <View style={styles.filler} />;
};

const styles = StyleSheet.create({
  filler: {
    width: "100%",
    height: 65,
    opacity: 0,
  },
});
export default PaddingBottom;
