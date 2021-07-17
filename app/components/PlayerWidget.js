import React, { useContext } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

import { Audio } from "expo-av";

import { API, graphqlOperation } from "aws-amplify";
import AppContext from "../../AppContext";
import { getSong } from "../../src/graphql/queries";

function PlayerWidget(props) {
  const [song, setSong] = useState(null);
  const [sound, setSound] = useState(null); // stores song which is playing in the widget
  const [isPlaying, setIsPlaying] = useState(true); //stores wheather widget is playing the song or no
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(null);

  const { songId } = useContext(AppContext);

  useEffect(() => {
    fetchSong();
  }, [songId]);

  const fetchSong = async () => {
    try {
      const data = await API.graphql(graphqlOperation(getSong, { id: songId }));
      setSong(data.data.getSong);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (song) {
      playCurrentSong();
    }
  }, [song]);

  const playCurrentSong = async () => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: song.uri },
        { shouldPlay: true },
        onPlaybackStatusUpdate
      );

      setSound(newSound);
    } catch (error) {
      console.log("Error in playing :", error);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const getProgress = () => {
    if (sound === null || position === null || duration === null) {
      return 0;
    }

    return (position / duration) * 100;
  };

  const onPlayPausePress = async () => {
    try {
      if (!sound) {
        return;
      }
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!song) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: ` ${getProgress()}%` }]} />
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.image} source={{ uri: song.imageUri }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {song.title}
          </AppText>
          <AppText style={styles.artist} numberOfLines={1}>
            {song.artist}
          </AppText>
        </View>
        <View style={styles.iconContainer}>
          <AntDesign name="heart" size={24} color="green" />
          <TouchableOpacity onPress={onPlayPausePress}>
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    backgroundColor: colors.black,
    width: "100%",
    marginVertical: 5,
  },
  progress: { backgroundColor: "#bcbcbc", height: 3 },
  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: colors.white,
  },
  artist: {
    fontSize: 16,
    color: colors.grey,
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 100,
    padding: 10,
  },
});

export default PlayerWidget;
