import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../assets/mola.png")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/SaveITtext.png")} />
        <AppText>Save your notes across all your devices </AppText>
      </View>
      <View style={styles.buttonsComponent}>
        <AppButton title="Continue With Email" />
        <AppButton title="Continue With Facebook" />
        <AppButton title="Continue With Google" />
      </View>
      <View style={styles.emailIcon}>
        <MaterialCommunityIcons name="email" color="white" size={25} />
      </View>
      <View style={styles.fbIcon}>
        <MaterialCommunityIcons name="facebook" color="white" size={25} />
      </View>
      <View style={styles.googleIcon}>
        <MaterialCommunityIcons name="google" color="white" size={25} />
      </View>
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text}>First time ? Sign Up :)</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: "#FF1E56",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsComponent: {
    padding: 20,
    width: "100%",
    bottom: 45,
  },
  emailIcon: {
    position: "absolute",
    bottom: 215,
    left: 40,
  },
  fbIcon: {
    position: "absolute",
    bottom: 150,
    left: 40,
  },
  googleIcon: {
    position: "absolute",
    bottom: 85,
    left: 40,
  },
  logoContainer: {
    position: "absolute",
    top: 33,
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    color: colors.white,
  },
  textContainer: {
    position: "absolute",
    bottom: 15,
  },
});
