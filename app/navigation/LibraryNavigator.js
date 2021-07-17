import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Library from "./../screens/Library";
import SearchParticularLibrary from "../screens/SearchParticularLibrary";
import AddLibraryScreen from "./../screens/AddLibraryScreen";

const Stack = createStackNavigator();

const LibraryNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Library" component={Library} />
    <Stack.Screen
      name="SearchParticularLibrary"
      component={SearchParticularLibrary}
    />
    <Stack.Screen name="AddLibrary" component={AddLibraryScreen} />
  </Stack.Navigator>
);

export default LibraryNavigator;
