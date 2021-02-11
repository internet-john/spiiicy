import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Icon, Input } from "react-native-elements";

import {
  createIdea,
  commitEditIdea,
  toggleEditMode,
} from "../../actions/actionCreators";

const IdeaInput = ({ idea }) => {
  const inputRef = useRef({});
  const editInputRef = React.useRef();
  const dispatch = useDispatch();
  const { ideaList, isEditMode, userSelectedIdea } = useSelector(
    (state) => state
  );
  const [input, updateInput] = useState("");

  const handleClearInput = () => inputRef.current.clear();

  const handleClearEditInput = () => editInputRef.current.clear();

  const handleSubmit = () => {
    let idea;
    /*
    will be problematic on edits.
     first check if idea exists in ideaList..
     if so..retain id
     */
    idea = {
      id: `id${input}`,
      value: input,
    };

    if (inputRef && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.clear();
    }

    dispatch(createIdea({ idea, index: ideaList.length }));
  };

  const handleChangeText = (value) => updateInput(value);

  const handleSubmitEdit = () => dispatch(commitEditIdea(idea));

  const handleEndEditing = () => dispatch(toggleEditMode());

  const renderInput = () => (
    <Input
      ref={inputRef}
      style={styles.input}
      inputContainerStyle={styles.inputContainerStyle}
      rightIcon={
        <Icon
          iconStyle={styles.clearInputButton}
          color={"#808080"}
          size={16}
          type={"antdesign"}
          name={"closecircle"}
          onPress={handleClearInput}
        />
      }
      autoFocus={true}
      placeholder={"Enter an idea here"}
      placeholderTextColor={"#DADADA"}
      onChangeText={handleChangeText}
      onSubmitEditing={handleSubmit}
      enablesReturnKeyAutomatically={true}
    />
  );

  const renderEditModeInput = () => (
    <Input
      ref={editInputRef}
      style={styles.input}
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

  const determineInputRender = () =>
    isEditMode && idea && userSelectedIdea && idea.id === userSelectedIdea.id
      ? renderEditModeInput()
      : renderInput();

  return determineInputRender();
};

const styles = StyleSheet.create({
  clearInputButton: {
    marginLeft: 10,
  },
  clearEditInputButton: {
    color: "#FFF",
    marginLeft: 10,
  },
  input: {
    color: "#FFF",
    backgroundColor: "#252525",
    borderRadius: 5,
    padding: 10,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    color: "#FFF",
  },
  editInputContainerStyle: {
    marginLeft: -10,
    marginRight: 5,
    marginBottom: -20,
    borderBottomWidth: 0,
    maxHeight: 40,
  },
});

export default IdeaInput;
