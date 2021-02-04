import React from "react";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, View, Text } from "react-native";

import Idea from "../Idea";
import IdeaOptionsDrawer from "../IdeaOptionsDrawer";

const keyExtractor = (item, index) => index.toString();

const renderItem = ({ item }) => (
  <>
    <Idea idea={item} />
    <IdeaOptionsDrawer idea={item} />
  </>
);

const IdeaList = () => {
  const ideaList = useSelector((state) => state.ideaList);

  return (
    <FlatList
      style={styles.taskList}
      keyExtractor={keyExtractor}
      data={ideaList}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  taskList: {
    flex: 1,
    marginLeft: 10,
  },
});

export default IdeaList;
