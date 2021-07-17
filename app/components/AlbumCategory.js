import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Album from "../components/Album";
import AppText from "../components/AppText";
import routes from "../navigation/routes";
import AlbumSeperator from "./../components/AlbumSeperator";

function AlbumCategory({ title, albums }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <FlatList
        data={albums}
        keyExtractor={(album) => album.id.toString()}
        renderItem={({ item }) => (
          <Album
            imageUrl={item.imageUri}
            artistsHeadline={item.artistsHeadline}
            onPress={() => navigation.navigate(routes.ALBUM, item)}
          />
        )}
        ItemSeparatorComponent={AlbumSeperator}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
  },
});
export default AlbumCategory;
