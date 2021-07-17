import React, { useEffect } from "react";
import Screen from "../components/Screen";
import { StyleSheet, FlatList } from "react-native";

import { API, graphqlOperation } from "aws-amplify";
import { listAlbumCategorys } from "../../src/graphql/queries";

import AlbumCategory from "./../components/AlbumCategory";
import PaddingBottom from "../additionals/PaddingBottom";
import { useState } from "react";

function Home(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchAlbumCategories();
  }, []);

  const fetchAlbumCategories = async () => {
    try {
      const data = await API.graphql(graphqlOperation(listAlbumCategorys));
      setCategories(data.data.listAlbumCategorys.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={categories}
        keyExtractor={(albumCategory) => albumCategory.id.toString()}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums.items} />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={PaddingBottom}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 2,
  },
});
export default Home;
