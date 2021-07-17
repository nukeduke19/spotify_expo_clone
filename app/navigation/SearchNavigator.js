import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/Search";
import SearchEveryThingScreen from "../screens/SearchEveryThingScreen";

const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="SearchEveryThing" component={SearchEveryThingScreen} />
  </Stack.Navigator>
);

export default SearchNavigator;
