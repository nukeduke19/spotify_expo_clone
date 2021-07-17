import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Spotify from "../screens/Spotify";
import AlbumNavigator from "./AlbumNavigator";

import LibraryNavigator from "./LibraryNavigator";
import SearchNavigator from "./SearchNavigator";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={AlbumNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <Entypo name="home" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="search" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Library"
      component={LibraryNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="my-library-music" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Premium"
      component={Spotify}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="spotify" color={color} size={24} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
