import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  
  function goalInputHandler (enteredText) { 
    setEnteredGoalText(enteredText);
  } //responsible for fetching TextInput user input.// 
  
  function addGoalHandler () {
    console.log(enteredGoalText)
  }; //should be fired when the button is clicked

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1, //divides up the screen. Add the flexes together and divide by the felx in specific container to get a ratio fill of the screen. 
    flexDirection: 'row', //row of column - flex orientation
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24, //padding between view containers
    borderBottomWidth: 1, //created a dividing line between view containers
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
});
