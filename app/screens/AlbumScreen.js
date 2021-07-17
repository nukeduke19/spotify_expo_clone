import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { StyleSheet, FlatList, View, Text } from "react-native";
import SongListItem from "../components/SongListItem";

import { API, graphqlOperation } from "aws-amplify";
import { getAlbum } from "./../../src/graphql/queries";

import colors from "../config/colors";
import AlbumHeader from "../components/AlbumHeader";
import { useContext } from "react";
import AppContext from "../../AppContext";
import PaddingBottom from "../additionals/PaddingBottom";

function AlbumScreen({ route }) {
  const albumId = route.params.id;

  const { setSongId } = useContext(AppContext);
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    fetchAlbumDetails();
  }, []);

  const fetchAlbumDetails = async () => {
    try {
      const data = await API.graphql(
        graphqlOperation(getAlbum, { id: albumId })
      );
      setAlbum(data.data.getAlbum);
    } catch (error) {
      console.log(error);
    }
  };

  if (!album) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: colors.primary }}>Loading ....</Text>
      </View>
    );
  }

  const playThisSong = (item) => {
    console.log("id :", item.id);
    setSongId(item.id);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={album.songs.items}
        keyExtractor={(song) => song.id.toString()}
        renderItem={({ item }) => (
          <SongListItem
            imageUri={item.imageUri}
            title={item.title}
            artist={item.artist}
            onPress={() => playThisSong(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <AlbumHeader
            imageUri={album.imageUri}
            artistsHeadline={album.artistsHeadline}
            by={album.by}
            numberOfLikes={album.numberOfLikes}
          />
        )}
        ListFooterComponent={PaddingBottom}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AlbumScreen;
