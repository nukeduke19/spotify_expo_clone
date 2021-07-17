import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

function LibraryMiniHeader(props) {
  return (
    <View style={styles.container}>
      <Entypo name="menu" size={24} color="white" />
      <View style={styles.detailsContainer}>
        <AppText style={styles.header}>Recently Played Songs</AppText>
      </View>
      <AntDesign name="appstore-o" size={20} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
  },
});
export default LibraryMiniHeader;
