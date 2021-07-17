import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";

function Genres({ title, backgroundColor, imageUri }) {
  return (
    <View style={[styles.genresContainer, { backgroundColor }]}>
      <View style={styles.detailsContainer}>
        <AppText style={styles.genreTitle}>{title}</AppText>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: imageUri,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  genresContainer: {
    borderRadius: 5,
    width: "45%",
    height: 90,
    padding: 15,
    margin: 10,
    flex: 1,
    overflow: "hidden",
  },
  detailsContainer: {
    position: "absolute",
    top: 8,
    left: 8,
    width: 80,
  },
  genreTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 90,
    height: 70,
    position: "absolute",
    bottom: 0,
    right: -40,
    zIndex: -1,
    transform: [{ rotate: "25deg" }],
  },
});
export default Genres;
