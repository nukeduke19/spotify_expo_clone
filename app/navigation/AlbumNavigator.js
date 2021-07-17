import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import AlbumScreen from "../screens/AlbumScreen";

const Stack = createStackNavigator();

const AlbumNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Album" component={AlbumScreen} />
  </Stack.Navigator>
);

export default AlbumNavigator;
