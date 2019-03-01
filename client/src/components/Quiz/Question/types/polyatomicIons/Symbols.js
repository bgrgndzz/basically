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
    <Text style={styles.questionText}>
      {formula.split(subscriptRegex).map((splitName, index, array) => {
        return [
          (
            <Text key="normal">
              {splitName}
            </Text>
          ),
          index === array.length - 1 ? null : (
            <Text 
              style={styles.subscript}
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
      <View style={styles.questionContent}>
        {formatFormula(correctInput.formula, styles)}
        <Text style={styles.questionTextSecondary}>{correctInput.number}</Text>
      </View>
      <Text style={styles.text}>
        What is this polyatomic ion called?
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
          <Text style={styles.chooseInputText}>{input.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  return [question, inputMapper];
};