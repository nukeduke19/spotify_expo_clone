import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import AppButton from "./AppButton";
import { useState } from "react";
import colors from "../config/colors";

function AlbumHeader({ imageUri, artistsHeadline, by, numberOfLikes }) {
  // const [btnValue, setBtnValue] = useState("play");

  // const handleClick = () => {
  //   btnValue == "play" ? setBtnValue("pause") : setBtnValue("play");
  // };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.artist}>{artistsHeadline}</AppText>
        <View style={styles.extra}>
          <AppText style={styles.extraText}>{by + " . "}</AppText>
          <AppText style={styles.extraText}>
            {numberOfLikes + "K likes"}
          </AppText>
        </View>
        {/* <View style={styles.buttonContainer}>
          <AppButton onPress={handleClick} title={btnValue} />
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  detailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  artist: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    paddingVertical: 5,
  },
  buttonContainer: {
    width: 100,
  },
  extra: {
    flexDirection: "row",
  },
  extraText: {
    color: colors.white,
    fontSize: 14,
  },
});
export default AlbumHeader;
