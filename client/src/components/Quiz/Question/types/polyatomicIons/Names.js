import React, {Component} from 'react';
import {
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

const formatFormula = (formula, styles) => {
  const subscriptRegex = /\[[0-9]\]/g;
  const bracketRegex = /\[|\]/g;
  return (
    <Text style={styles.chooseInputText}>
      {formula.split(subscriptRegex).map((splitName, index, array) => {
        return [
          (
            <Text key="normal">
              {splitName}
            </Text>
          ),
          index === array.length - 1 ? null : (
            <Text 
              style={styles.subscriptSmall}
              key="higlighted"
            >
              {formula.match(subscriptRegex)[index].replace(bracketRegex, '')}
            </Text>
          )
        ]
      })}
    </Text>
  );
};

export default (styles, clicked, handlePress, disabled, correctInput) => {
  question = (
    <View style={styles.question}>
      <Text style={styles.text}>
        Which of the formulas below represent <Text style={styles.boldText}>"{correctInput.name}"</Text>?
      </Text>
    </View>
  );
  inputMapper = input => {
    const inputState = (
      clicked === 0 ? null : (
        clicked === input.name ? (
          input.name === correctInput.name ? 'correctPressed' : 'incorrectPressed'
        ) : (
          input.name === correctInput.name ? 'correctUnpressed' : 'incorrectUnpressed'
        )
      )
    );
    return (
      <TouchableOpacity 
        style={[
          styles.input,
          styles[inputState]
        ]}
        onPress={() => handlePress(input.name)}
        disabled={disabled}
        key={input.formula}
      >
        <View style={styles.chooseInputContainer}>
          <TouchableOpacity 
            style={[
              styles.chooseInput,
              styles[inputState + 'ChooseInput']
            ]} 
            onPress={() => handlePress(input.name)}
            disabled={disabled}
          >
            <View 
              style={[
                styles.chooseInputInner,
                styles[inputState + 'ChooseInputInner']
              ]}
            />
          </TouchableOpacity>
          {formatFormula(input.formula, styles)}
        </View>
      </TouchableOpacity>
    );
  }
  
  return [question, inputMapper];
}