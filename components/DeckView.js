// Imports
import React, { Component } from 'react';
import { Platform, Text, TextInput, View, FlatList, TouchableOpacity, TouchableHighlight, Animated } from 'react-native';
import styles from '../styles'
import { connect } from 'react-redux'
import reducer from '../reducers'
import { addDeck, addCard } from '../actions'

import { Ionicons } from '@expo/vector-icons';

// Component Class
class DeckView extends Component {

  constructor(props) {
    super(props)
    this.updateDeckView = this.updateDeckView.bind(this);
  }

  componentDidMount() {}

  updateDeckView(callback) {
    //console.log('update deck view', this.props.navigation.state.params )
    this.props.navigation.state.params.updateHomeView()
    this.forceUpdate(() => {
      if (callback) {
        callback()
      }
    });
  }

  startQuiz = (deck) => {
    if (deck.questions.length === 0) {
      alert("Deck has no cards!");
      return
    }
    else {
      this.props.navigation.navigate('Quiz', { deck: deck })
    }
  }

  render() {
    let id = this.props.navigation.state.params.deckId;
    let deck = this.props.decks[id];
    let cardsList = deck.questions;

    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <View style={{ marginBottom: 50 }}>
            <Text style={styles.titles}>{deck.title}</Text>
            <Text style={{ textAlign: 'center' }}>{cardsList.length + " Card" + (cardsList.length != 1 ? 's' : '')}</Text>
          </View>

          <TouchableOpacity style={styles.btnTwo} onPress={() => { this.startQuiz(deck) }}>
            <Ionicons name="md-clipboard" size={32} color="white" style={{textAlign:'center'}}/>
            <Text style={styles.textWhite}>Take the Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnOne} onPress={() => this.props.navigation.navigate(
            'AddCardView', { deckId: id, updateDeckView: this.updateDeckView })}>
            <Text style={styles.textWhite}>Add Card</Text>
          </TouchableOpacity>
          
        </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(DeckView)
