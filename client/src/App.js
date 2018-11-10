import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';

export default class App extends Component {
  state = {
    page: 'Home',
    category: '',
    quiz: {}
  }

  changePage = (page, state={}) => {
    this.setState({
      ...state,
      page
    });
  };

  render() {
    let props = {
      changePage: this.changePage
    };

    if (this.state.page === 'Home') {
      return <Home {...props} />;
    } else if (this.state.page === 'Quiz') {
      props.category = this.state.category;
      props.quiz = this.state.quiz;

      return <Quiz {...props} />;
    } else {
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
