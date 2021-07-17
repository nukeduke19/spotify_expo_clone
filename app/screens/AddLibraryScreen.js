import React from "react";
import AppText from "./../components/AppText";
import Screen from "../components/Screen";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

function AddLibraryScreen({ navigation }) {
  return (
    <LinearGradient colors={["#808080", "#000000"]} style={styles.screen}>
      <Screen>
        <View style={styles.container}>
          <AppText style={styles.text}>Give your playlist a name</AppText>
          <TextInput style={styles.textInput} />
          <View style={styles.borderBottom} />
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <AppText style={styles.cancel}>CANCEL</AppText>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <AppText style={styles.skip}>SKIP</AppText>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Screen>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 25,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    marginVertical: 20,
  },
  textInput: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingHorizontal: 40,
  },
  borderBottom: {
    backgroundColor: colors.grey,
    width: "100%",
    height: 1,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  cancel: {
    fontSize: 14,
    color: colors.grey,
    marginHorizontal: 25,
  },
  skip: {
    fontSize: 14,
    color: colors.primary,
    marginHorizontal: 25,
  },
});
export default AddLibraryScreen;
