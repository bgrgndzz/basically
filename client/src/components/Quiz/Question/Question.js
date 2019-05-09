import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import ElementNames from './types/elements/ElementNames.js';
import ElementSymbols from './types/elements/ElementSymbols.js';
import ElementElectricalCharges from './types/elements/ElectricalCharges.js';

import Names from './types/polyatomicIons/Names.js';
import Symbols from './types/polyatomicIons/Symbols.js';
import PolyatomicElectricalCharges from './types/polyatomicIons/ElectricalCharges.js';

import Matter from './types/matter/Matter';

import MoleQuestions from './types/moleQuestions/MoleQuestions';

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
      'Matter': {
        'States of Matter': Matter,
        'Pure Substances': Matter,
        'Classification of Matter': Matter
      },
      "Elements": {
        'Element Names': ElementNames,
        'Element Symbols': ElementSymbols,
        'Electrical Charges': ElementElectricalCharges
      },
      "Polyatomic Ions": {
        'Names': Names,
        'Symbols': Symbols,
        'Electrical Charges': PolyatomicElectricalCharges
      },
      'Mole Questions': {
        'Mole Questions': MoleQuestions,
        'Significant Figures': MoleQuestions
      }
    };
  }

  render() {
    const inputs = this.props.inputs;
    const title = this.props.quiz.title;
    const [question, inputMapper] = this.types[this.props.category][title](styles, this.state.clicked, this.handlePress, this.state.disabled, this.props.correctInput, this.props.question);
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
    backgroundColor: '#f3f7fe'
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
    fontFamily: 'Poppins-Bold',
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
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
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
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    marginRight: 'auto'
  },
  questionTextSecondary: {
    marginLeft: 'auto',
    fontFamily: 'Poppins-Regular',
    color: '#FFF'
  },
  text: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
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
    margin: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  halfInput: {
    width: '45%',
    margin: 5,
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
  chooseInputText: {
    fontFamily: 'Poppins-Regular',
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
    fontFamily: 'Poppins-Bold',
    alignSelf: 'flex-end'
  },
  inputTextSecondary: {
    textAlign: 'right',
    marginLeft: 'auto',
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
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
  },
  subscript: {
    fontSize: 20
  },
  subscriptSmall: {
    fontSize: 10
  }
});
