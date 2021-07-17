import React from "react";
import { StyleSheet, View } from "react-native";

function AlbumSeperator(props) {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    marginRight: 15,
  },
});
export default AlbumSeperator;
