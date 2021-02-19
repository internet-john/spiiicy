import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import OptionsIcon from "react-native-vector-icons/SimpleLineIcons";

import { IdeaInputEdit } from "../Input";
import { userSelectIdea } from "../../actions/actionCreators";

const Idea = ({ idea }) => {
  const dispatch = useDispatch();
  const { randomSelectedIdea, userSelectedIdea, isEditMode } = useSelector(
    (state) => state
  );

  const handleSelectIdea = () => dispatch(userSelectIdea(idea));

  const determineIdeaContainerStyle = () => {
    let style = styles.taskEntryContainer;

    if (randomSelectedIdea && randomSelectedIdea.id === idea.id)
      style = styles.selectedTaskEntryContainer;
    else if (userSelectedIdea && userSelectedIdea.id === idea.id)
      style = styles.taskEntryContainer;

    return style;
  };

  return (
    <ListItem containerStyle={determineIdeaContainerStyle()}>
      {isEditMode &&
      idea &&
      userSelectedIdea &&
      idea.id === userSelectedIdea.id ? (
        <IdeaInputEdit idea={idea} />
      ) : (
        <>
          <Text
            style={
              userSelectedIdea && idea.id === userSelectedIdea.id
                ? styles.selectedTaskEntry
                : styles.taskEntry
            }
          >
            {idea.value}
          </Text>
          <View style={styles.taskEntryOps}>
            <OptionsIcon
              name="options"
              onPress={handleSelectIdea}
              size={20}
              color={"#FFF"}
            />
          </View>
        </>
      )}
    </ListItem>
  );
};

const styles = StyleSheet.create({
  taskEntry: {
    color: "#fff",
    display: "flex",
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: "600",
  },
  taskEntryContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#000",
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 5,
    marginBottom: 5,
  },
  taskEntryOps: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 10,
  },
  selectedTaskEntry: {
    color: "#fff",
    display: "flex",
    paddingLeft: 5,
    fontSize: 18,
    fontWeight: "600",
  },
  selectedTaskEntryContainer: {
    backgroundColor: "red",
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 5,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  editModeTaskEntryContainer: {},
  editInputContainerStyle: {
    marginLeft: -10,
    marginRight: 5,
    marginBottom: -20,
    borderBottomWidth: 0,
    maxHeight: 40,
  },
  clearInputButton: {
    marginLeft: 10,
  },
});

export default Idea;
