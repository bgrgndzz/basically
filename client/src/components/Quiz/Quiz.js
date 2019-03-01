import React, { Component } from 'react';
import {StyleSheet, Animated} from 'react-native';

import Question from './Question/Question';

const data = {
  elements: require('../../data/elements.json'),
  polyatomicIons: require('../../data/polyatomicIons.json')
};

export default class Quiz extends Component {
  state = {
    inputs: [],
    correctInput: {},
    opacity: new Animated.Value(1)
  }

  shuffleArray = (array) => {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  chooseQuestion = () => {
    if (this.props.quiz.title === 'Electrical Charges') {
      const charges = this.props.category === 'Polyatomic Ions' ? ['3-', '2-', '1-', '1+'] : ['3-', '2-', '1-', '0', '1+', '2+', '3+'];
      const shuffledCharges = this.shuffleArray(charges);
      const shuffledScope = this.shuffleArray(this.scope);
      const inputs = shuffledCharges.slice(0, 4).map(input => shuffledScope.find(item => item.charge === input))

      this.setState({
        inputs: this.shuffleArray(inputs),
        correctInput: inputs[0]
      });
    } else {
      const inputs = this.shuffleArray(this.scope).slice(0, 4);
      this.setState({
        inputs: this.shuffleArray(inputs),
        correctInput: inputs[0]
      });
    }
  }
  next = () => {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 0.1,
        duration: 200
      }
    ).start(() => {
      this.chooseQuestion();
      Animated.timing(
        this.state.opacity,
        {
          toValue: 1,
          duration: 200
        }
      ).start();
    });
  }

  componentWillMount() {
    if (this.props.quiz.scope) {
      this.scope = data[this.props.quiz.file].filter(item => this.props.quiz.scope.includes(item.name));
    } else {
      this.scope = data[this.props.quiz.file];
    }

    this.chooseQuestion();
  }

  render() {
    return (
      <Animated.View 
        style={[
          styles.container,
          {opacity: this.state.opacity}
        ]}
      >
        <Question
          {...this.props}
          inputs={this.state.inputs}
          correctInput={this.state.correctInput}
          next={this.next}
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});