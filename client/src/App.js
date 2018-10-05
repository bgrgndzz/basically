import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Home from './components/Home/Home';

export default class App extends Component {
  state = {
    page: 'Home'
  }
  
  render() {
    switch(this.state.page) {
      case 'Home':
        return <Home />;
      default:
        // temporary error view
        return (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>An unknown error occurred.</Text>
          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorText: {
    fontSize: 24
  }
});
