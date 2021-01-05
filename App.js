import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList } from 'react-native';
import { Header, Input, ListItem, Icon, Button } from 'react-native-elements';

export default function App() {
  let taskList = [];
  let inputRef = useRef(null);
  const [list, setList] = useState(taskList)
  const [input, updateInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [focusedTask, setFocusedTask] = useState(null)
  const [selectedTask, setSelectedTask] = useState(null);
  const [isSelectionOverlayVisible, setIsSelectionOverlayVisible] = useState(false);

  const handleChangeText = value => updateInput(value);

  const handleSubmit = () => {
    const newList = list.concat({ value: input, id: list.length });
    inputRef && inputRef.current && inputRef.current.clear();

    setList(newList);
  }

  const handleSubmitEdit = () => {
    const newList = list.map(listItem => {
      if (listItem.id === focusedTask.id) listItem.value = input;

      return listItem;
    })

    setList(newList);
    toggleEditMode();
  }

  const handleEditTask = (item) => {
    toggleEditMode(); setFocusedTask(item);
  }

  const handleRemoveTask = (item) => {
    const newList = list.filter(listItem => listItem.id !== item.id);

    setList(newList);
  }

  const handlePressRandomIdea = () =>
    setSelectedTask(list[Math.floor(Math.random() * Math.floor(list.length - 1))]);


  const keyExtractor = (item, index) => index.toString();

  const toggleEditMode = () => setIsEditing(!isEditing);

  const renderItem = ({ item }) =>
    <ListItem containerStyle={selectedTask && item.id === selectedTask.id ? styles.selectedTaskEntryContainer : styles.taskEntryContainer}>
      {isEditing && item.id === focusedTask.id ?
        <Input
          style={styles.input}
          inputContainerStyle={styles.inputContainerStyle}
          clearButtonMode={'while-editing'}
          autoFocus={true}
          placeholder={item.value}
          placeholderTextColor={'#606060'}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmitEdit}
          onEndEditing={toggleEditMode}
        />
        : <Text style={selectedTask && item.id === selectedTask.id ? styles.selectedTaskEntry : styles.taskEntry}>{item.value}</Text>}
      <View style={styles.taskEntryOps}>
        <Icon name='edit' color='#fff' onPress={() => handleEditTask(item)} />
        <Icon name='delete' color='#fff' onPress={() => handleRemoveTask(item)} />
      </View>
    </ListItem>

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header centerComponent={{ text: '¡spiiicy!', style: styles.headerText }} containerStyle={styles.header} />
      <Input
        style={styles.input}
        inputContainerStyle={styles.inputContainerStyle}
        ref={inputRef}
        clearButtonMode={'while-editing'}
        autoFocus={true}
        placeholder={'Enter an idea here'}
        placeholderTextColor={'#DADADA'}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmit}
      />
      {list.length >= 2 && !isEditing && <Button
        buttonStyle={styles.randomIdeaButton}
        containerStyle={styles.randomIdeaButtonContainer}
        titleStyle={styles.randomButtonTitle}
        title="Select random idea"
        onPress={handlePressRandomIdea}
      />}
      <FlatList
        style={styles.taskList}
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#101010',
    borderBottomWidth: 0,
    marginTop: 50,
    marginBottom: 10
  },
  headerText: {
    color: 'red', fontSize: 32, fontWeight: '800', letterSpacing: -2.5
  },
  input: {
    color: '#FFF',
    backgroundColor: '#252525',
    borderRadius: 5,
    padding: 10
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  clearInputButton: {
    color: '#FFF'
  },
  randomIdeaButtonContainer: {
    marginTop: -10,
    marginBottom: 12.5,
    borderColor: '#ECEEF1',
    borderWidth: .8,
    borderRadius: 2.5
  },
  randomIdeaButton: {
    backgroundColor: '#000',
    padding: 5,
    width: Dimensions.get('window').width * .95,
  },
  randomButtonTitle: {
    fontSize: 15,
    fontWeight: '600'
  },
  taskList: {
    flex: 1
  },
  taskEntry: {
    color: '#fff',
    display: 'flex',
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: '600'
  },
  taskEntryContainer: {
    backgroundColor: '#000',
    width: Dimensions.get('window').width * .95,
    borderRadius: 5,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedTaskEntry: {
    color: '#fff',
    display: 'flex',
    paddingLeft: 5,
    fontSize: 18,
    fontWeight: '600'
  },
  selectedTaskEntryContainer: {
    backgroundColor: 'red',
    width: Dimensions.get('window').width * .95,
    borderRadius: 5,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  taskEntryOps: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 10,
  },
});
