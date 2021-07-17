import { StyleSheet, FlatList, View } from "react-native";
import browseAll from "../data/browseAll";
import AppText from "../components/AppText";
import Genres from "./Genres";
import PaddingBottom from "./PaddingBottom";

import React from "react";

function BrowsAllList(props) {
  return (
    <View>
      <AppText style={styles.subheading}>Browse all</AppText>
      <FlatList
        data={browseAll}
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
        ListFooterComponent={PaddingBottom}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  subheading: {
    fontWeight: "bold",
    marginLeft: 10,
  },
});
export default BrowsAllList;
