import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image} from 'react-native';

import quizzes from '../../data/quizzes.json';

export default class Home extends Component {
  state = {
    categories: (new Array(Object.keys(quizzes).length)).fill(0)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.categories}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headings}>
            <Text style={styles.headingOne}>Learn &amp; Revise!</Text>
            <Text style={styles.headingTwo}>Select a topic below.</Text>
          </View>
          {
            Object.keys(quizzes).map((category, index) => (
              <View
                style={styles.category}
                key={category}
              >
                <TouchableOpacity
                  style={styles.categoryHeader}
                  onPress={() => {
                    let categories = this.state.categories;
                    categories[index] = categories[index] === 1 ? 0 : 1;

                    this.setState({categories});
                  }}
                >
                  <Text style={styles.categoryHeading}>{category}</Text>
                  <Image
                    style={[styles.caret, this.state.categories[index] === 1 ? styles.caretOpen : styles.caretClosed]}
                    source={require('../../images/arrow.png')}
                  />
                </TouchableOpacity>
                {this.state.categories[index] === 1 ? (
                  <ScrollView
                    style={styles.topics}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {
                      quizzes[category].quizzes.map((quiz, index) => (
                        <TouchableOpacity
                          onPress={() => this.props.changePage(quiz.status === 'Learn' ? 'Learn' : 'Quiz', {category, quiz})}
                          disabled={!quiz.active}
                          key={index}
                        >
                          <View
                            style={[
                              styles.topic,
                              index === 0 ? styles.firstTopic : null
                            ]}
                          >
                            <Text
                              style={[
                                styles.topicHeadingOne,
                              ]}
                            >{quiz.title}</Text>
                            <Text
                              style={[
                                styles.topicHeadingTwo,
                              ]}
                            >{quiz.status}</Text>
                          </View>
                        </TouchableOpacity>
                      ))
                    }
                  </ScrollView>
                ) : null}
              </View>
            ))
          }
        </ScrollView>
        <View style={styles.footer}>
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
  firstTopic: {marginLeft: 25},
  categories: {flex: .75},
  category: {
    margin: 15,
    marginBottom: 25,
    paddingVertical: 25,
    backgroundColor: 'white',
    shadowOffset:{width: 0, height: 1},
    shadowRadius: 1,
    shadowColor: '#000',
    shadowOpacity: .1,
    borderRadius: 8
  },
  categoryHeader: {
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  categoryHeading: {
    color: 'rgba(0, 0, 0, 0.75)',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  caret: {
    width: 15,
    height: 15,
    marginLeft: 'auto',
    marginRight: 15
  },
  caretOpen: {
    transform: [{
      rotateZ: '-90deg'
    }]
  },
  topics: {
    flexDirection: 'row',
    overflow: 'scroll',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 15
  },
  topic: {
    padding: 15,
    paddingRight: 40,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#00D4FF',
    width: 250,
    height: 250,
    justifyContent: 'flex-end'
  },
  topicHeadingOne: {
    fontSize: 27,
    color: 'white',
    fontFamily: 'Poppins-Black',
  },
  topicHeadingTwo: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    padding: 25
  },
  footerName: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
  }
});
