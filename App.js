import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { Dimensions, StyleSheet, Text, View, FlatList } from "react-native";
import { Input, ListItem, Button, Icon } from "react-native-elements";
import OptionsIcon from "react-native-vector-icons/SimpleLineIcons";

import AppHeader from "./src/components/AppHeader";

export default function App() {
  let taskList = [];
  let inputRef = useRef(null);
  let editInputRef = useRef(null);
  const [list, setList] = useState(taskList);
  const [input, updateInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [userSelectedTask, setUserSelectedTask] = useState(null);
  const [randomlySelectedTask, setRandomlySelectedTask] = useState(null);
  const [isTaskOptionsDrawerVisible, setIsTaskOptionsDrawerVisible] = useState(
    false
  );

  const handleChangeText = (value) => updateInput(value);

  const handleSubmit = () => {
    const newList = list.concat({ value: input, id: list.length });
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.clear();
    }

    setList(newList);
  };

  const handleSubmitEdit = () => {
    const newList = list.map((listItem) => {
      if (listItem.id === userSelectedTask.id) listItem.value = input;

      return listItem;
    });

    setUserSelectedTask(null);
    setRandomlySelectedTask(null);
    setList(newList);
    toggleEditMode();
  };

  const handleEditTask = (item) => {
    updateInput(item.value);
    toggleTaskOptionsDrawer();
    toggleEditMode();
  };

  const handleRemoveTask = () => {
    const newList = list.filter(
      (listItem) => listItem.id !== userSelectedTask.id
    );

    setUserSelectedTask(null);
    setRandomlySelectedTask(null);
    setList(newList);
    toggleTaskOptionsDrawer();
  };

  const determineEligibleList = () =>
    list.slice().filter((entry) => entry.id !== randomlySelectedTask.id);

  const handlePressRandomIdea = () => {
    let eligibleList = list.slice();
    if (randomlySelectedTask) eligibleList = determineEligibleList();
    setRandomlySelectedTask(
      eligibleList[Math.floor(Math.random() * Math.floor(eligibleList.length))]
    );
  };

  const keyExtractor = (item, index) => index.toString();

  const toggleEditMode = () => setIsEditing(!isEditing);

  const toggleTaskOptionsDrawer = () =>
    setIsTaskOptionsDrawerVisible(!isTaskOptionsDrawerVisible);

  const displayTaskOptions = (item) => {
    toggleTaskOptionsDrawer();
    setUserSelectedTask(item);
  };

  const renderItem = ({ item }) => (
    <View>
      <ListItem
        containerStyle={
          randomlySelectedTask && randomlySelectedTask.id === item.id
            ? styles.selectedTaskEntryContainer
            : styles.taskEntryContainer
        }
      >
        {/* // <Idea isEditMode/> */}
        {isEditing && item.id === userSelectedTask.id ? (
          <Input
            ref={editInputRef}
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
            style={styles.input}
            inputContainerStyle={styles.editInputContainerStyle}
            autoFocus={true}
            autoCorrect={false}
            placeholder={item.value}
            placeholderTextColor={"#FFF"}
            onChangeText={handleChangeText}
            onSubmitEditing={handleSubmitEdit}
            onEndEditing={toggleEditMode}
            enablesReturnKeyAutomatically={true}
          />
        ) : (
          <>
            {/* <Idea> */}
            <Text
              style={
                userSelectedTask && item.id === userSelectedTask.id
                  ? styles.selectedTaskEntry
                  : styles.taskEntry
              }
            >
              {item.value}
            </Text>
            <View style={styles.taskEntryOps}>
              <OptionsIcon
                name="options"
                size={20}
                color={"#FFF"}
                onPress={() => displayTaskOptions(item)}
              />
            </View>
            {/* <Idea /> */}
          </>
        )}
      </ListItem>
      {/* <IdeaOptionsDrawer> */}
      {isTaskOptionsDrawerVisible && item.id === userSelectedTask.id && (
        <View style={styles.taskEntryOpsDrawer}>
          <Button
            title="Edit"
            onPress={() => handleEditTask(item)}
            buttonStyle={styles.opsDrawerButton}
            titleStyle={styles.opsDrawerButtonText}
          />
          <Button
            title="Delete"
            onPress={handleRemoveTask}
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
      )}
    </View>
    // </IdeaOptionsDrawer>
  );

  const handleClearInput = () => inputRef.current.clear();

  const handleClearEditInput = () => editInputRef.current.clear();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <AppHeader />
      {/* <IdeaInput> */}
      <Input
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
        ref={inputRef}
        autoFocus={true}
        placeholder={"Enter an idea here"}
        placeholderTextColor={"#DADADA"}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmit}
        enablesReturnKeyAutomatically={true}
      />
      {list.length >= 2 && !isEditing && (
        <Button
          buttonStyle={styles.randomIdeaButton}
          containerStyle={styles.randomIdeaButtonContainer}
          titleStyle={styles.randomButtonTitle}
          title="Select random idea"
          onPress={handlePressRandomIdea}
        />
      )}
      {/* </IdeaInput> */}
      {/* <IdeaList> */}
      <FlatList
        style={styles.taskList}
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
      {/* </IdeaList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
    textAlign: "center",
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
  clearInputButton: {
    marginLeft: 10,
  },
  randomIdeaButtonContainer: {
    marginTop: -10,
    marginBottom: 12.5,
    borderColor: "#ECEEF1",
    borderWidth: 0.8,
    borderRadius: 2.5,
    marginLeft: 10,
    marginRight: 10,
  },
  randomIdeaButton: {
    backgroundColor: "#000",
    width: Dimensions.get("window").width * 0.95,
  },
  randomButtonTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  taskList: {
    flex: 1,
    marginLeft: 10,
  },
  taskEntry: {
    color: "#fff",
    display: "flex",
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: "600",
  },
  taskEntryContainer: {
    backgroundColor: "#000",
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 5,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  taskEntryOps: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 10,
  },

  opsDrawerButton: {
    backgroundColor: "#000",
  },
  opsDrawerButtonText: {
    color: "#FFF",
    fontSize: 15,
  },
});
