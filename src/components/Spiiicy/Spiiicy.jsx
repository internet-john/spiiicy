import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import AppHeader from "../AppHeader";
import { IdeaInput } from "../Input";
import RandomIdeaButton from "../Button";
import IdeaList from "../IdeaList";

const Spiiicy = () => (
  <View style={styles.container}>
    <StatusBar style="light" />
    <AppHeader />
    <IdeaInput />
    <RandomIdeaButton />
    <IdeaList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
    textAlign: "center",
  },
});

export default Spiiicy;
