import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";

import { AntDesign } from "@expo/vector-icons";

function PaymentScreen({ visible = false, modalVisibility }) {
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.iconcontainer}>
        <AntDesign
          name="close"
          size={30}
          color="white"
          style={{ padding: 5 }}
          onPress={modalVisibility}
        />
      </View>
      <Screen style={styles.modalScreen}>
        <AppText style={styles.modalHeading}>Unable to connect</AppText>
        <AppText style={styles.modalDescription}>
          Please Check your settings or try again later.
        </AppText>
        <AppButton
          title="retry"
          //   onPress={() => console.log("btn clicked")}
          onPress={modalVisibility}
        />
      </Screen>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalScreen: {
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  iconcontainer: {
    backgroundColor: colors.black,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  modalHeading: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalDescription: {
    color: colors.grey,
    fontSize: 14,
    textAlign: "center",
    marginVertical: 30,
  },
});
export default PaymentScreen;
