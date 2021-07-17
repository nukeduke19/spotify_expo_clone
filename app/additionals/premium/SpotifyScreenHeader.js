import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AppText from "../../components/AppText";
import Button from "./Button";
import FeatureCard from "./FeatureCard";
import CurrentPlan from "./CurrentPlan";

import colors from "../../config/colors";
import features from "../../data/features";
import Circles from "../Circles";

function SpotifyScreenHeader({ modalVisibility }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.heading}>
        Get more out of your music with Premium
      </AppText>
      <FlatList
        data={features}
        keyExtractor={(feature) => feature.id.toString()}
        renderItem={({ item }) => (
          <FeatureCard free={item.free} premium={item.premium} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={300}
      />
      <Circles />
      <Button title="get premium" onPress={modalVisibility} />
      <AppText style={styles.conditions}>
        Terms and conditions <AppText style={styles.apply}>apply.</AppText>
      </AppText>
      <CurrentPlan />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 20,
  },
  conditions: {
    fontSize: 10,
    marginBottom: 20,
  },
  apply: {
    fontSize: 10,
    color: colors.grey,
  },
});
export default SpotifyScreenHeader;
