import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "./../../components/AppText";
import Button from "./Button";
import colors from "../../config/colors";

function Plans({
  title,
  price,
  billing_cycle,
  description,
  conditions,
  color1,
  color2,
  modalVisibility,
}) {
  return (
    <LinearGradient colors={[color1, color2]} style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
        <View>
          <AppText style={styles.price}>{price}</AppText>
          <AppText style={styles.billing_cycle}>{billing_cycle}</AppText>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.description}>{description}</AppText>
        <Button title="view plans" color="white" onPress={modalVisibility} />
        <AppText style={styles.conditions}>
          {conditions}
          <AppText style={styles.apply}> . Terms and conditions </AppText>apply.
        </AppText>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  titleContainer: { width: 140 },
  detailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
  },
  billing_cycle: {
    fontSize: 10,
    color: "#cdcdb1",
    textTransform: "uppercase",
    textAlign: "right",
  },
  description: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  conditions: {
    fontSize: 10,
    textAlign: "center",
    color: "#cdcdb1",
  },
  apply: {
    color: colors.white,
    fontSize: 10,
  },
});
export default Plans;
