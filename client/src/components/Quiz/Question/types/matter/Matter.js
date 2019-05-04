import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default (styles, clicked, handlePress, disabled, correctInput, question) => {
  question = (
    <View style={styles.question}>
      <Text style={styles.text}>
        {question}
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
