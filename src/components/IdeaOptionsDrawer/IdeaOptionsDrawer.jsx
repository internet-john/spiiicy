import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dimensions, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import OptionsIcon from "react-native-vector-icons/SimpleLineIcons";

import {
  deleteIdea,
  editIdea,
  userSelectIdea,
} from "../../actions/actionCreators";

const IdeaOptionsDrawer = ({ idea }) => {
  const dispatch = useDispatch();
  const {
    isEditMode,
    userSelectedIdea,
    isTaskOptionsDrawerVisible,
  } = useSelector((state) => state);

  const handleEditIdea = () => dispatch(editIdea(idea.id));

  const handleDeleteIdea = () => dispatch(deleteIdea(idea.id));

  const toggleTaskOptionsDrawer = () => dispatch(userSelectIdea(null));

  return isTaskOptionsDrawerVisible &&
    userSelectedIdea &&
    idea.id === userSelectedIdea.id ? (
    <View style={styles.taskEntryOpsDrawer}>
      <Button
        title="Edit"
        onPress={handleEditIdea}
        buttonStyle={styles.opsDrawerButton}
        titleStyle={styles.opsDrawerButtonText}
      />
      <Button
        title="Delete"
        onPress={handleDeleteIdea}
        buttonStyle={styles.opsDrawerButton}
        titleStyle={styles.opsDrawerButtonText}
      />
      <Button
        title="Cancel"
        onPress={toggleTaskOptionsDrawer}
        buttonStyle={styles.opsDrawerButton}
        titleStyle={styles.opsDrawerButtonText}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  taskEntryOps: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 10,
  },
  taskEntryOpsDrawer: {
    width: Dimensions.get("window").width * 0.95,
  },
  opsDrawerButton: {
    backgroundColor: "#000",
  },
  opsDrawerButtonText: {
    color: "#FFF",
    fontSize: 15,
  },
});

export default IdeaOptionsDrawer;
