import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import PaddingBottom from "./../additionals/PaddingBottom";
import Plans from "../additionals/premium/Plans";
import colors from "../config/colors";

import spotifyPlans from "../data/spotifyPlans";
import SpotifyScreenHeader from "../additionals/premium/SpotifyScreenHeader";

import PaymentScreen from "../additionals/PaymentScreen";

function Spotify(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Screen style={styles.screen}>
        <FlatList
          data={spotifyPlans}
          keyExtractor={(plan) => plan.id.toString()}
          renderItem={({ item }) => (
            <Plans
              title={item.title}
              price={item.price}
              billing_cycle={item.billing_cycle}
              description={item.description}
              conditions={item.conditions}
              color1={item.color1}
              color2={item.color2}
              modalVisibility={() => setModalVisible(true)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <SpotifyScreenHeader
              modalVisibility={() => setModalVisible(true)}
            />
          )}
          ListFooterComponent={PaddingBottom}
        />
      </Screen>
      <PaymentScreen
        visible={modalVisible}
        modalVisibility={() => setModalVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 7,
  },
});

export default Spotify;
