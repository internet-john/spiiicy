import React from "react";
import { useSelector } from "react-redux";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";

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
  const { ideaList, isLoading } = useSelector((state) => state);

  return isLoading ? (
    <ActivityIndicator size="large" />
  ) : (
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
