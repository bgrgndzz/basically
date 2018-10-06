import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

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
          {/* temporary static category and topic loading */}
          <View style={styles.category}>
            <Text style={styles.categoryHeading}>Elements</Text>
            <ScrollView 
              style={styles.topics}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={[styles.topic, styles.activeTopic, styles.firstTopic]}>
                <Text style={styles.topicHeadingOne}>Symbols</Text>
                <Text style={styles.topicHeadingTwo}>Revise</Text>
              </View>
              <View style={[styles.topic, styles.inactiveTopic]}>
                <Text style={styles.topicHeadingOne}>Names</Text>
                <Text style={styles.topicHeadingTwo}>Coming Soon!</Text>
              </View>
              <View style={[styles.topic, styles.inactiveTopic]}>
                <Text style={styles.topicHeadingOne}>Electrical Charges</Text>
                <Text style={styles.topicHeadingTwo}>Coming Soon!</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryHeading}>Compounds</Text>
            <ScrollView 
              style={styles.topics}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={[styles.topic, styles.inactiveTopic, styles.firstTopic]}>
                <Text style={styles.topicHeadingOne}>Polyatomic Ions</Text>
                <Text style={styles.topicHeadingTwo}>Coming Soon!</Text>
              </View>
              <View style={[styles.topic, styles.inactiveTopic]}>
                <Text style={styles.topicHeadingOne}>Naming Compounds</Text>
                <Text style={styles.topicHeadingTwo}>Coming Soon!</Text>
              </View>
            </ScrollView>
          </View>
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
    color: '#C2AAFF',
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
    paddingRight: 25,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#FFF'
  },
  activeTopic: {
    shadowOffset:{  width: 0,  height: 5,  },
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: .1
  },
  inactiveTopic: {opacity: .5},
  topicHeadingOne: {fontWeight: '500'},
  topicHeadingTwo: {color: '#747474' },
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