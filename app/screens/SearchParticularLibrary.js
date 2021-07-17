import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

function SearchParticularLibrary({ navigation }) {
  return (
    <Screen>
      <View style={styles.InputContainer}>
        <AntDesign
          name="left"
          size={24}
          color="white"
          style={styles.leftIcon}
          onPress={navigation.goBack}
        />
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Search Your Library"
            placeholderTextColor="grey"
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.container}>
        <AppText style={styles.heading}>Play what you love</AppText>
        <AppText style={styles.subheading}>
          Search for playlists,artists,albums and podcast in Your Library{" "}
        </AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    elevation: 2,
  },
  leftIcon: {
    paddingHorizontal: 20,
  },
  textInputContainer: {
    flex: 0.95,
    backgroundColor: colors.darkGrey,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
  },
  textInput: { color: "white", fontWeight: "bold" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
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
export default SearchParticularLibrary;
