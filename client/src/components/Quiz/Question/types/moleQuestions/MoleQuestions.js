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
    <React.Fragment>
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
    </React.Fragment>
  );
};


export default (styles, clicked, handlePress, disabled, correctInput, question) => {
  question = (
    <View style={styles.question}>
      <Text style={styles.text}>
        {formatFormula(question, styles)}
      </Text>
    </View>
  );
  inputMapper = input => {
    const inputState = (
      clicked === 0 ? null : (
        clicked === input ? (
          input === correctInput ? 'correctPressed' : 'incorrectPressed'
        ) : (
          input === correctInput ? 'correctUnpressed' : 'incorrectUnpressed'
        )
      )
    );
    return (
      <TouchableOpacity
        style={[
          styles.input,
          styles[inputState]
        ]}
        onPress={() => handlePress(input)}
        disabled={disabled}
        key={input}
      >
        <View style={styles.chooseInputContainer}>
          <TouchableOpacity
            style={[
              styles.chooseInput,
              styles[inputState + 'ChooseInput']
            ]}
            onPress={() => handlePress(input)}
            disabled={disabled}
          >
            <View
              style={[
                styles.chooseInputInner,
                styles[inputState + 'ChooseInputInner']
              ]}
            />
          </TouchableOpacity>
          <Text>{input}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return [question, inputMapper];
}
