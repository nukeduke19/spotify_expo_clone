import React, { useState } from "react";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import Genres from "../additionals/Genres";

import yourGenres from "../data/yourGenres";
import colors from "../config/colors";

import { AntDesign } from "@expo/vector-icons";
import BrowsAllList from "../additionals/BrowseAllList";
import routes from "../navigation/routes";

function Search({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <AppText style={styles.header}>Search</AppText>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(routes.SEARCHEVERYTHING)}
      >
        <View style={styles.inputField}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={styles.icon}
          />
          <AppText style={styles.placeholder}>
            Artists,songs, or podcast
          </AppText>
        </View>
      </TouchableWithoutFeedback>

      <FlatList
        data={yourGenres}
        keyExtractor={(genre) => genre.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <Genres
            title={item.title}
            backgroundColor={item.backgroundColor}
            imageUri={item.imageUri}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <AppText style={styles.subheading}>your top genres</AppText>
        }
        ListFooterComponent={<BrowsAllList />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 5 },
  icon: {
    marginRight: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subheading: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  inputField: {
    backgroundColor: colors.white,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
  placeholder: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Search;
