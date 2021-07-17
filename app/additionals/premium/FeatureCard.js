import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppText from "./../../components/AppText";
import { LinearGradient } from "expo-linear-gradient";

function FeatureCard({ free, premium }) {
  return (
    <View style={styles.container}>
      <View style={styles.freeContainer}>
        <AppText style={styles.title}>FREE</AppText>
        <AppText style={styles.subtitle}>{free}</AppText>
      </View>
      <LinearGradient colors={["#003300", "#00b300"]} style={styles.gradient}>
        <View style={styles.premiumContainer}>
          <AppText style={styles.title}>PREMIUM</AppText>
          <AppText style={styles.subtitle}>{premium}</AppText>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {
    borderRadius: 60,
    flexDirection: "row",
    width: 300,
    height: 130,
    marginVertical: 15,
    marginRight: 15,
  },
  freeContainer: {
    backgroundColor: colors.darkGrey,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  premiumContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    position: "absolute",
    top: 10,
    fontSize: 10,
    color: colors.white,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default FeatureCard;
