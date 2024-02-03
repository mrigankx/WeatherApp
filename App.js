import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CurrentWeather from "./src/components/CurrentWeather";
const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <CurrentWeather />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "pink",
    flex: 1,
  },
});

export default App;
