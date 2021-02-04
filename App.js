import React from "react";
import { StatusBar } from "expo-status-bar";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import { actionCreators } from "./src/actions";

import rootReducer from "./src/reducers/index";
import AppHeader from "./src/components/AppHeader";
import { IdeaInput } from "./src/components/Input";
import RandomIdeaButton from "./src/components/Button";
import IdeaList from "./src/components/IdeaList";

export default function App() {
  const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
  });

  const store = createStore(rootReducer, composeEnhancers());

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <AppHeader />
        <IdeaInput />
        <RandomIdeaButton />
        <IdeaList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
    textAlign: "center",
  },
});
