import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Album({ imageUrl, artistsHeadline, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.names} numberOfLines={2}>
            {artistsHeadline}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    marginVertical: 10,
    width: 140,
  },
  image: {
    width: "100%",
    height: 140,
    resizeMode: "contain",
  },
  detailsContainer: {
    paddingTop: 10,
  },
  names: {
    color: colors.grey,
    fontSize: 12,
    textAlign: "center",
  },
});
export default Album;
