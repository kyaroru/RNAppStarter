import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CONFIG from 'react-native-config';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi, Welcome</Text>
        <Text style={styles.text}>Environment: {CONFIG.ENVIRONMENT}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E90FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default App;
