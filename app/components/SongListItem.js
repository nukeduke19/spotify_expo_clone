import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { Entypo } from "@expo/vector-icons";

function SongListItem({ onPress, imageUri, title, artist }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.artist} numberOfLines={1}>
            {artist}
          </AppText>
        </View>
        <Entypo name="dots-three-vertical" size={18} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 5,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  detailsContainer: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: colors.white,
  },
  artist: {
    fontSize: 14,
    color: colors.grey,
  },
});
export default SongListItem;
