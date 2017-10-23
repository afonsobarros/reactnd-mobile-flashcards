// Imports
import React, { Component } from 'react';
import { Platform, Text, TextInput, View, FlatList, TouchableOpacity, TouchableHighlight, Animated } from 'react-native';
import styles from '../styles'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
import { addDeck, addCard } from '../actions'
import { ADD_DECK, ADD_CARD } from '../actions'

import { newDeck } from '../utils/tools'
import { white, black, purple, gray, orange } from '../styles/colors'
import { Ionicons } from '@expo/vector-icons';

// Component Class
class CreateDeckView extends Component {
  state = {
    title: "",
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  checkInput() {
    if (this.state.title.length < 3) {
      alert("Deck Title must be at least 3 characters long!");
      return
    }
    this.createDeck();
  }

  createDeck() {
    let deck = newDeck(this.state.title);
    this.props.addDeck(deck);
    this.setState({
      title: "",
    })
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.ViewContainer}>
        <Ionicons name="md-list-box" size={32} color={purple} style={{ textAlign: 'center' }} />

        <Text style={styles.titles}>
          Create a new Deck
          </Text>

        <TextInput style={styles.textField} placeholder="Deck Title"
          value={this.state.title} onChangeText={(title) => this.setState({ title })} />

        <TouchableOpacity style={styles.btnOrange} onPress={() => this.checkInput()}>
          <Ionicons name="md-add-circle" size={32} color="white" style={{ textAlign: 'center' }} />
          <Text style={styles.textWhite}>Create Deck</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

// Redux Connect
function mapStateToProps(decks) {
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckView)
