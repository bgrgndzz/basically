import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import ElementNames from './types/ElementNames.js';
import ElementSymbols from './types/ElementSymbols.js';
import ElectricalCharges from './types/ElectricalCharges.js';

export default class Question extends Component {
  state = {
    disabled: false,
    clicked: 0
  }

  handlePress = (clicked) => {
    this.setState({
      disabled: true,
      clicked
    }, () => {
      setTimeout(() => {
        this.props.next();
        this.setState({
          disabled: false,
          clicked: 0
        });
      }, 1000);
    });
  }
  componentWillMount() {
    this.types = {
      'Element Names': ElementNames,
      'Element Symbols': ElementSymbols,
      'Electrical Charges': ElectricalCharges
    };
  }

  render() {
    const inputs = this.props.inputs;
    const title = this.props.quiz.title;
    const [question, inputMapper] = this.types[title](styles, this.state.clicked, this.handlePress, this.state.disabled, this.props.correctInput);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerName}>{title}</Text>
        </View>
        <View style={styles.questionContainer}>
          {question}
          <View style={styles.inputs}>
            {inputs.map(inputMapper)}
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.closeContainer}
            onPress={() => this.props.changePage('Home')}
          >
            <Image 
              style={styles.close}
              resizeMode="contain"
              source={require('../../../images/x.png')}
            />
          </TouchableOpacity>
          <Text style={styles.footerName}>BASICALLY</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    padding: 25
  },
  footerName: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginLeft: -30
  },
  closeContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto'
  },
  close: {
    width: 15,
    height: 15
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 'auto',
    padding: 25,
    marginTop: 10
  },
  headerName: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 17,
    fontWeight: '400'
  },
  question: {
    marginBottom: 25,
    paddingHorizontal: 30
  },
  questionContent: {
    width: '100%',
    height: 100,
    backgroundColor: '#00D4FF',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  questionText: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: '600',
    marginRight: 'auto'
  },
  questionTextSecondary: {
    marginLeft: 'auto',
    color: '#FFF'
  },
  text: {
    fontSize: 17,
    textAlign: 'center'
  },
  boldText: {
    fontWeight: '900',
  },
  inputs: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2.5%'
  },
  input: {
    width: '90%',
    margin: '2.5%',
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  halfInput: {
    width: '45%',
    margin: '2%',
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    backgroundColor: '#FFF'
  },
  chooseInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  chooseInput: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    marginRight: 10,
    flexDirection: 'row',
    padding: 2.5
  },
  chooseInputInner: {
    flex: 1,
    borderRadius: 20
  },
  inputContent: {
    width: '100%',
    height: 100,
    backgroundColor: '#00D4FF',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row'
  },
  inputText: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: '600',
    alignSelf: 'flex-end'
  },
  inputTextSecondary: {
    textAlign: 'right',
    marginLeft: 'auto',
    color: '#FFF'
  },
  correctPressed: {
    borderColor: '#00BD55',
    backgroundColor: '#8FFFC0'
  },
  correctPressedChooseInput: {
    borderColor: '#00BD55',
    backgroundColor: '#8FFFC0'
  },
  correctPressedChooseInputInner: {
    backgroundColor: '#00BD55'
  },
  correctUnpressed: {
    borderColor: '#00BD55',
    backgroundColor: '#8FFFC0'
  },
  correctUnpressedChooseInput: {
    borderColor: '#00BD55',
    backgroundColor: '#8FFFC0'
  },
  correctUnpressedChooseInputInner: {
    backgroundColor: '#00BD55'
  },
  incorrectPressed: {
    borderColor: '#FF2F2E',
    backgroundColor: '#FFCECC'
  },
  incorrectPressedChooseInput: {
    borderColor: '#FF2F2E',
    backgroundColor: '#FFCECC'
  },
  incorrectPressedChooseInputInner: {
    backgroundColor: '#FF2F2E'
  }
});