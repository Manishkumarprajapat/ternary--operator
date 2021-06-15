import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
     this.state = {
      name: ''
  }
  }
speak = () => {
    var thingToSay = this.state.name;
    this.state.name === ''
      ? alert('Please Enter a word')
      : Speech.speak(thingToSay);
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'text converter',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.text}
        />
  
        <TouchableOpacity 
        styles= {styles.searchButton}
        onPress = {this.speak}
      >

        <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  searchButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 100,
  },
  buttonText:{
    width: '50%',
    height: 100,
    alignSelf: 'center',
    padding: 20,
    marginLeft: 50,
    fontWeight:"bold",
    fontSize:30
  },
});
