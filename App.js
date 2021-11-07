import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, TextInput } from 'react-native';
import { theme } from './colors';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const addToDo = () => {
    if (text === "") {
      return ;
    }
    // save To Do
    const newToDos = Object.assign(
      {},
      toDos, 
      {[Date.now()]: {text, work: working}}
      );
    setToDos(newToDos);
    setText("");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{ ...styles.btnText, color: working ? 'white' : theme.gray }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{ ...styles.btnText, color: !working ? 'white' : theme.gray }}>Travel</Text>
        </TouchableOpacity>
      </View>
      <TextInput 
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        returnKeyType='done'
        value={text}
        placeholder={working ? "Add a To Do" : "Where do you want to go?"} style={styles.input}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100
  },
  btnText: {
    fontSize: 44,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginTop: 25,
    fontSize: 15,
  }
});
