import React, { Component } from 'react';
import {StyleSheet, Animated} from 'react-native';

import Question from './Question/Question';

const data = {
  elements: require('../../data/elements.json'),
  polyatomicIons: require('../../data/polyatomicIons.json'),
  questions: require('../../data/questions.json'),
  moleQuestions: require('../../data/moleQuestions.json')
};

const sigFigs = (n, sig) =>  {
  var mult = Math.pow(10, sig - Math.floor(Math.log(n) / Math.LN10) - 1);
  return Math.round(n * mult) / mult;
}

export default class Quiz extends Component {
  state = {
    question: '',
    inputs: [],
    correctInput: {},
    opacity: new Animated.Value(1),
    questionNo: 0
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
    } else if (this.props.quiz.title === 'Mole Questions') {
      const questionIndex = Math.floor(Math.random() * this.scope.length);
      let question = this.scope[questionIndex];

      const randomElement = data.elements[Math.floor(Math.random() * data.elements.length)];
      const randomNumber = sigFigs(Math.random() * 20 + 2, 3);
      const randomCompound = data.polyatomicIons[Math.floor(Math.random() * data.polyatomicIons.length)];

      let inputs = [randomNumber].concat(Array(3).fill().map(_ => sigFigs(Math.random() * 5 + randomNumber - 5, 3)));
      question = question
        .replace('[element]', randomElement.symbol)
        .replace('[compound]', randomCompound.formula)
        .replace('[number]', randomNumber)
        .replace('[molar mass]', sigFigs(data.elements.find(element => element.symbol === randomElement.symbol).atomic_mass, 3));

      switch (questionIndex) {
        case 0:
          inputs = inputs.map(number => `${sigFigs(number, 3)} * 6.02 * 10^23`);
          break;
        case 1:
          inputs = inputs.map(number => `${sigFigs(number / randomElement.atomic_mass, 3)} * 6.02 * 10^23`);
          break;
        case 2:
          inputs = inputs.map(number => `${sigFigs(number / randomElement.atomic_mass, 3)}`);
          break;
        case 3:
          let masses = Object.keys(randomCompound.elements).map(element => data.elements.find(data => data.symbol === element).atomic_mass * randomCompound.elements[element]);
          const massTotal = masses.reduce((acc, cur) => acc + cur);
          masses = masses.map(mass => sigFigs(mass / massTotal, 3));

          let highest = [0, 0];
          masses.forEach((mass, index) => { if (mass > highest[0]) highest = [mass, index]; });

          inputs = [
            'They have the same mass percent',
            Object.keys(randomCompound.elements)[0],
            Object.keys(randomCompound.elements)[1],
            Object.keys(randomCompound.elements)[2] || 'None, they are massless'
          ];

          [inputs[highest[1] + 1], inputs[0]] = [inputs[0], inputs[highest[1] + 1]];

          break;
      }

      this.setState({
        inputs: this.shuffleArray(inputs),
        correctInput: inputs[0],
        question
      });
    } else if (this.props.quiz.title === 'Significant Figures') {
      const sigFigCount = Math.ceil(Math.random() * 7 + 1);
      const randomNumber = sigFigs(Math.random() * 10000000, sigFigCount);
      let inputs = [sigFigCount];
      for (let i = 0; i <= 2; i++) {
        while (true) {
          let randomNewNum = Math.ceil(Math.random() * 5 + sigFigCount - 5);
          if (!inputs.find(input => input === randomNewNum)) {
            inputs.push(randomNewNum);
            break;
          }
        }
      }
      this.setState({
        inputs: this.shuffleArray(inputs),
        correctInput: inputs[0],
        question: `How many sigFigs does ${randomNumber} have?`
      });

    } else if (this.props.quiz.type && this.props.quiz.type === 'manual') {
      const questions = this.scope[this.props.quiz.title]
      if (this.state.questionNo === questions.length) return this.props.changePage('Home');
      const inputs = questions[this.state.questionNo].options;
      const question = questions[this.state.questionNo].question;
      this.setState({
        inputs: this.shuffleArray(inputs),
        correctInput: inputs[0],
        question,
        questionNo: this.state.questionNo + 1
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
          question={this.state.question}
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
