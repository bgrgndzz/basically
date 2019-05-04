import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image} from 'react-native';

import learningSheets from './learningSheets';

export default class Learn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headings}>
            <Text style={styles.headingOne}>{this.props.quiz.title}</Text>
            <Text style={styles.headingTwo}>{this.props.category}</Text>
          </View>
          {learningSheets[this.props.category][this.props.quiz.title]}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.closeContainer}
            onPress={() => this.props.changePage('Home')}
          >
            <Image
              style={styles.close}
              resizeMode="contain"
              source={require('../../images/x.png')}
            />
          </TouchableOpacity>
          <Text style={styles.footerName}>BASICALLY</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#f3f7fe'
  },
  headings: {
    height: Dimensions.get('window').height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  headingOne: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 40,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    marginBottom: 15
  },
  headingTwo: {
    color: 'rgba(0, 0, 0, 0.75)',
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  },
  content: {
    flex: .75,
    padding: 25
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
});
