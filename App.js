import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app//navigation/AppNavigator";
import PlayerWidget from "./app/components/PlayerWidget";

import AppContext from "./AppContext";

import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

export default function App() {
  const [songId, setSongId] = useState();

  return (
    <>
      <StatusBar style="light" />
      <AppContext.Provider value={{ songId, setSongId }}>
        <NavigationContainer theme={navigationTheme}>
          <AppNavigator />
        </NavigationContainer>
        <PlayerWidget />
      </AppContext.Provider>
      <View style={styles.bottomTabNavigatorBottomPadding} />
    </>
  );
}

const styles = StyleSheet.create({
  bottomTabNavigatorBottomPadding: {
    width: "100%",
    height: 5,
    backgroundColor: "#282828",
  },
});
