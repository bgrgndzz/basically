import React, {Component} from 'react';
import {
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

export default (styles, clicked, handlePress, disabled, correctInput) => {
  question = (
    <View style={styles.question}>
      <View style={styles.questionContent}>
        <Text style={styles.questionText}>{correctInput.symbol}</Text>
        <Text style={styles.questionTextSecondary}>{correctInput.number}</Text>
      </View>
      <Text style={styles.text}>
        What is this element called?
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
        key={input.symbol}
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