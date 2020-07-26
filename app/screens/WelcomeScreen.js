import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require("../assets/notesWall.png")}
    >
      <View style={styles.logoContainner}>
        <Image source={require("../assets/logo.png")} />
        <AppText>"Save Your Notes Across All Your Devices"</AppText>
      </View>
      <View style={styles.buttonsComponent}>
        <AppButton title="Log in" />
        <AppButton title="Sign in" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainner: {
    alignItems: "center",
    position: "absolute",
    top: 180,
  },
  buttonsComponent: {
    padding: 15,
    width: "100%",
  },
});
