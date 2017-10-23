// Imports
import React, { Component } from 'react';
import { Platform, Text, TextInput, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from '../styles'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
import { addDeck, addCard } from '../actions'
import { NavigationActions, TabNavigator, StackNavigator } from 'react-navigation';

import { white, black, red, purple, gray, blue, pink } from '../styles/colors'

// Component Class
class InfoView extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Info View</Text>
      </View>
    )
  }
}

// Redux Connect
function mapStateToProps (decks) {
  return {
    decks: decks
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addDeck: (deck) => dispatch(addDeck(deck)),
    addCard: (card, deckId) => dispatch(addCard(card, deckId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoView)
