import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Icon, Input } from "react-native-elements";

import { commitEditIdea, toggleEditMode } from "../../actions/actionCreators";

const IdeaInputEdit = ({ idea }) => {
  const editInputRef = useRef({});
  const dispatch = useDispatch();
  const { ideaList, isEditMode, userSelectedIdea } = useSelector(
    (state) => state
  );
  const [input, updateInput] = useState("");

  const handleChangeText = (value) => updateInput(value);

  const handleSubmitEdit = () => dispatch(commitEditIdea(idea));

  const handleClearEditInput = () => editInputRef.current.clear();

  const handleEndEditing = () => dispatch(toggleEditMode());

  return (
    <View>
      <Input
        ref={editInputRef}
        style={styles.input}
        inputContainerStyle={styles.editInputContainerStyle}
        rightIcon={
          <Icon
            iconStyle={styles.clearInputButton}
            color={"#808080"}
            size={16}
            type={"antdesign"}
            name={"closecircle"}
            onPress={handleClearEditInput}
          />
        }
        autoFocus={true}
        autoCorrect={false}
        placeholder={userSelectedIdea.value}
        placeholderTextColor={"#FFF"}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEdit}
        onEndEditing={handleEndEditing}
        enablesReturnKeyAutomatically={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  clearInputButton: {
    marginLeft: 10,
  },
});

export default IdeaInputEdit;
