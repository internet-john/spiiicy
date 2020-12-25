import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList } from 'react-native';
import { Header, Input, ListItem, Icon } from 'react-native-elements';

export default function App() {
  let taskList = [];
  let inputRef = useRef(null);
  const [list, setList] = useState(taskList)
  const [input, updateInput] = useState('');

  const handleChangeText = value => updateInput(value);

  const handleSubmit = () => {
    const newList = list.concat(input);
    inputRef.current.clear();

    setList(newList);
  }

  const handleRemoveTask = (item) => {
    const newList = list.filter(listItem => listItem !== item);

    setList(newList);
  }

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => <ListItem containerStyle={styles.taskEntryContainer}><Text style={styles.taskEntry}>{item}</Text><Icon name='delete' color='#fff' style={styles.deleteButton} onPress={() => handleRemoveTask(item)} /></ListItem>

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header centerComponent={{ text: '¡spiiicy!', style: styles.headerText }} containerStyle={styles.header} />
      <Input
        style={styles.input}
        inputContainerStyle={styles.inputContainerStyle}
        ref={inputRef}
        clearButtonMode={'always'}
        autoFocus={true}
        placeholder={'Enter an idea here'}
        placeholderTextColor={'#606060'}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmit}
      />
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
    borderBottomWidth: 0
  },
  headerText: {
    color: 'red', fontSize: 32, fontWeight: '800', letterSpacing: -2.5
  },
  input: {
    color: '#FFF',
    backgroundColor: '#202020',
    borderRadius: 2.5,
    paddingLeft: 10
  },
  inputContainerStyle: {
    borderBottomWidth: 0
  },
  taskList: {
    flex: 1
  },
  taskEntry: {
    color: '#fff',
    paddingLeft: 10,
    display: 'flex'
  },
  taskEntryContainer: {
    backgroundColor: '#000',
    width: Dimensions.get('window').width,
  }
});
