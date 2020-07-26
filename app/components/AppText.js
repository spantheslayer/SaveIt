import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFont = () => {
  return Font.loadAsync({
    josfinLight: require("../assets/fonts/JosefinSans-Light.ttf"),
    josfinRegular: require("../assets/fonts/JosefinSans-Regular.ttf"),
    josfinSemiBold: require("../assets/fonts/JosefinSans-SemiBold.ttf"),
  });
};

export default function AppText({ children }) {
  const [fontsLoaded, setfontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Text style={styles.text}>{children}</Text>;
  } else {
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setfontsLoaded(true)}>
        <Text style={styles.text}>{children}</Text>
      </AppLoading>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontFamily: "josfinRegular",
    fontSize: 19,
    paddingVertical: 10,
  },
});
