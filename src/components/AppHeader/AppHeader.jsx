import React from "react";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const AppHeader = () => (
  <Header
    centerComponent={{ text: "¡spiiicy!", style: styles.headerText }}
    containerStyle={styles.header}
  />
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#101010",
    borderBottomWidth: 0,
    marginTop: 50,
    marginBottom: 10,
  },
  headerText: {
    color: "red",
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: -2.5,
  },
});

export default AppHeader;
