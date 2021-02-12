import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Icon, Input } from "react-native-elements";

import { commitEditIdea, toggleEditMode } from "../../actions/actionCreators";

const IdeaInputEdit = ({ idea }) => {
  const editInputRef = useRef({});
  const dispatch = useDispatch();
  const [input, updateInput] = useState("");

  const handleChangeText = (value) => updateInput(value);

  const handleSubmitEdit = () => {
    const editedIdea = { ...idea, value: input };

    dispatch(commitEditIdea(editedIdea));
  };

  const handleClearEditInput = () => editInputRef.current.clear();

  const handleEndEditing = () => dispatch(toggleEditMode());

  return (
    <Input
      ref={editInputRef}
      style={styles.editInput}
      inputContainerStyle={styles.editInputContainerStyle}
      rightIcon={
        <Icon
          iconStyle={styles.clearEditInputButton}
          color={"#808080"}
          size={16}
          type={"antdesign"}
          name={"closecircle"}
          onPress={handleClearEditInput}
        />
      }
      autoFocus={true}
      placeholder={"Enter an idea here"}
      placeholderTextColor={"#FFF"}
      onChangeText={handleChangeText}
      onSubmitEditing={handleSubmitEdit}
      onEndEditing={handleEndEditing}
      enablesReturnKeyAutomatically={true}
    />
  );
};

const styles = StyleSheet.create({
  clearEditInputButton: {
    color: "#FFF",
    marginLeft: 10,
  },
  editInput: {
    color: "#FFF",
    backgroundColor: "#252525",
    borderRadius: 5,
    padding: 10,
  },
  editInputContainerStyle: {
    marginLeft: -10,
    marginRight: 5,
    marginBottom: -20,
    borderBottomWidth: 0,
    maxHeight: 40,
  },
});

export default IdeaInputEdit;
