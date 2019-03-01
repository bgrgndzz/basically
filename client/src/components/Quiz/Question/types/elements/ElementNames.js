import React, {Component} from 'react';
import {
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

export default (styles, clicked, handlePress, disabled, correctInput) => {
  question = (
    <View style={styles.question}>
      <Text style={styles.text}>
        Which of the symbols below represent <Text style={styles.boldText}>"{correctInput.name}"</Text>?
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
          styles.halfInput,
          styles[inputState]
        ]}
        onPress={() => handlePress(input.name)}
        disabled={disabled}
        key={input.symbol}
      >
        <View style={styles.inputContent}>
          <Text style={styles.inputText}>{input.symbol}</Text>
          <Text style={styles.inputTextSecondary}>{input.number}</Text>
        </View>
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
          <Text style={styles.chooseInputText}>{input.symbol}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  return [question, inputMapper];
}