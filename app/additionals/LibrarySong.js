import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
function LibrarySong({ imageUri, title, artist, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
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
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    width: "100%",
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
export default LibrarySong;
