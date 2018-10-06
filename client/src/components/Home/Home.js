import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

import quizzes from '../../data/quizzes.json';

export default class Home extends Component {
  render() {
    return (
      <LinearGradient 
        style={styles.container} 
        colors={['#7F00FF', '#0077FF']}
      >
        <View style={styles.headings}>
          <Text style={styles.headingOne}>Welcome, Buğra!</Text>
          <Text style={styles.headingTwo}>You can select a topic below and start revising right now!</Text>
        </View>
        <View style={styles.categories}>
          {
            Object.keys(quizzes).map(category => (
              <View 
                style={styles.category}
                key={category}
              >
                <Text style={styles.categoryHeading}>{category}</Text>
                <ScrollView 
                  style={styles.topics}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {
                    quizzes[category].map((topic, index) => (
                      <TouchableOpacity
                        onPress={() => this.props.changePage('Quiz', {category, topic})}
                        key={index}
                      >
                        <View 
                          style={[
                            styles.topic, 
                            topic.active ? styles.activeTopic : styles.inactiveTopic, 
                            index === 0 ? styles.firstTopic : null
                          ]}
                        >
                          <Text 
                            style={[
                              styles.topicHeadingOne, 
                              topic.active ? styles.activeTopicHeadingOne : styles.inactiveTopicHeadingOne
                            ]}
                          >{topic.title}</Text>
                          <Text 
                            style={[
                              styles.topicHeadingTwo, 
                              topic.active ? styles.activeTopicHeadingTwo : styles.inactiveTopicHeadingTwo
                            ]}
                          >{topic.status}</Text>
                        </View>
                      </TouchableOpacity>
                    ))
                  }
                </ScrollView>
              </View>
            ))
          }
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerName}>BASICALLY</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  headings: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  headingOne: {
    color: '#FFF',
    fontSize: 34,
    textAlign: 'center',
    marginBottom: 25
  },
  headingTwo: {
    color: 'rgba(255, 255, 255, .7)',
    fontSize: 17,
    textAlign: 'center'
  },
  firstTopic: {marginLeft: 25},
  categories: {flex: .5},
  category: {marginBottom: 25},
  categoryHeading: {
    color: '#FFF',
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 25
  },
  topics: {
    flexDirection: 'row',
    overflow: 'scroll',
    paddingTop: 5,
    paddingBottom: 5,
  },
  topic: {
    padding: 15,
    paddingRight: 40,
    marginRight: 10,
    borderRadius: 8
  },
  activeTopic: {
    backgroundColor: '#FFF',
    shadowOffset:{width: 0, height: 5},
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: .1
  },
  inactiveTopic: {
    backgroundColor: 'rgba(255, 255, 255, .35)'
  },
  topicHeadingOne: {fontWeight: '500'},
  activeTopicHeadingTwo: {color: '#747474'},
  inactiveTopicHeadingOne: {color: 'rgba(255, 255, 255, .7)'},
  inactiveTopicHeadingTwo: {color: 'rgba(255, 255, 255, .35)'},
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  footerName: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '700'
  }
});