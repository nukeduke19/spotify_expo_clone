import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";

import { Ionicons } from "@expo/vector-icons";

function SearchEveryThingScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.InputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Search "
            placeholderTextColor="white"
            style={styles.textInput}
          />
          <Ionicons
            name="camera-outline"
            size={24}
            color="white"
            style={styles.leftIcon}
          />
        </View>
      </View>
      <View style={styles.container}>
        <AppText style={styles.heading}>Play what you love</AppText>
        <AppText style={styles.subheading}>
          Search for playlists,artists,songs,podcasts, and more.{" "}
        </AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: colors.darkGrey,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#737373",
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
  },
  textInput: {
    color: "white",
    fontWeight: "bold",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
  subheading: {
    fontSize: 12,
    color: colors.grey,
    textAlign: "center",
  },
});
export default SearchEveryThingScreen;
