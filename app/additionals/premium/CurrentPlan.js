import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppText from "./../../components/AppText";

function CurrentPlan(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Spotify Free</AppText>
      <AppText style={styles.subTitle}>CURRENT PLAN</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
    paddingLeft: 30,
    paddingRight: 40,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 10,
    color: colors.grey,
  },
});
export default CurrentPlan;
