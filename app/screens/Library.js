import React, { useEffect, useState, useContext } from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet, View, Image, Text } from "react-native";
import LibrarySong from "./../additionals/LibrarySong";
import AppText from "../components/AppText";
import PaddingBottom from "../additionals/PaddingBottom";
import LibraryMiniHeader from "../additionals/LibraryMiniHeader";
import routes from "../navigation/routes";
import AppContext from "./../../AppContext";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

//connection to back-end :1
import { API, graphqlOperation } from "aws-amplify";
import { listSongs } from "../../src/graphql/queries";

function Library({ navigation }) {
  const { setSongId } = useContext(AppContext);

  //connection to back-end :2
  const [songs, setSongs] = useState(null);

  //connection to back-end :3
  useEffect(() => {
    fetchSongDeatils();
  }, []);

  //connection to back-end :4
  const fetchSongDeatils = async () => {
    try {
      const data = await API.graphql(graphqlOperation(listSongs));
      setSongs(data.data.listSongs.items);
    } catch (error) {
      console.log("Error", error);
    }
  };

  if (!songs) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: colors.primary }}>Loading ....</Text>
      </View>
    );
  }

  const playThisSong = (item) => {
    setSongId(item.id);
  };

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["purple", "#121212"]}
      style={styles.gradient}
    >
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <Image
            source={require("../assets/Anand1.png")}
            style={styles.image}
          />
          <View style={styles.detailsContainer}>
            <AppText style={styles.header}>Your Library</AppText>
          </View>
          <AntDesign
            name="search1"
            size={24}
            color="white"
            style={styles.searchIcon}
            onPress={() => navigation.navigate(routes.SEARCHPARTICULAR)}
          />
          <AntDesign
            name="plus"
            size={24}
            color="white"
            onPress={() => navigation.navigate(routes.ADDLIBRARY)}
          />
        </View>

        <FlatList
          data={songs}
          keyExtractor={(song) => song.id.toString()}
          renderItem={({ item }) => (
            <LibrarySong
              imageUri={item.imageUri}
              title={item.title}
              artist={item.artist}
              onPress={() => playThisSong(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<LibraryMiniHeader />}
          ListFooterComponent={PaddingBottom}
        />
      </Screen>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  screen: {
    padding: 5,
  },
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  detailsContainer: {
    marginLeft: 20,
    justifyContent: "center",
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
  },
  searchIcon: {
    paddingHorizontal: 25,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Library;
