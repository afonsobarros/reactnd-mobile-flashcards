// Imports
import React, { Component } from 'react';
import { Platform, Text, TextInput, View, FlatList, TouchableOpacity, TouchableHighlight, ScrollView, Animated } from 'react-native';
import styles from '../styles'
import { connect } from 'react-redux'
import reducer from '../reducers'
import { addDeck, addCard } from '../actions'
import { NavigationActions, TabNavigator, StackNavigator } from 'react-navigation';

import { white, black, red, purple, gray, blue, pink } from '../styles/colors'
import { Ionicons } from '@expo/vector-icons';

// Component Class
class QuizView extends Component {
  constructor(props) {
    super(props);
    //console.log("quiz view - ", this.props);

    let { deck } = this.props.navigation.state.params;
    var cards = deck.questions;

    this.state = {
      correct: 0,
      wrong: 0,
      currentQuestion: 0,
      deck: deck,
      cards: cards,
      answerAsText: ""
    }
  }

  tryGuess(guess) {
    let card = this.state.cards[this.state.currentQuestion];
    if(guess === card.answer) {
      this.setState((prevState) => {
        return {answerAsText: "", correct: prevState.correct + 1, currentQuestion: prevState.currentQuestion + 1}
      })
    }
    else {
      this.setState((prevState) => {
        return {answerAsText: "", wrong: prevState.wrong + 1, currentQuestion: prevState.currentQuestion + 1}
      })
    }
  }

  restart() {
    this.setState({currentQuestion: 0, correct: 0, wrong: 0});
  }

  render() {
    if(this.state.cards[this.state.currentQuestion] !== undefined) {
      return (
        <View style={styles.ViewContainer}>
        <ScrollView>
          <Text style={{marginTop: 30, textAlign: 'center'}}>{`Question ${this.state.currentQuestion + 1} of ${this.state.cards.length}`}</Text>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 50}}>
            <Text style={{margin: 10}}>Correct: {this.state.correct}</Text>
            <Text style={{margin: 10}}>Wrong: {this.state.wrong}</Text>
          </View>
          <Text style={styles.headTextCenter}>{this.state.cards[this.state.currentQuestion].question}</Text>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, marginBottom: 30}}>
            <TouchableOpacity style={styles.btnPurple} onPress={() => this.tryGuess(true)}>
              <Text style={styles.textWhite}>True</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnPurple} onPress={() => this.tryGuess(false)}>
              <Text style={styles.textWhite}>False</Text>
            </TouchableOpacity>
          </View>

          <Text style={{margin: 20, textAlign: 'center'}}>{this.state.answerAsText}</Text>
          
          <TouchableOpacity style={styles.btn} onPress={() => this.setState({answerAsText: String(this.state.cards[this.state.currentQuestion].answer) })}>
            <Text >Show Answer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnPurple} onPress={() => this.restart()}>
            <Text style={styles.textWhite}>Restart Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnOrange} onPress={() => this.props.navigation.goBack()}>
            <Text>Back To Deck</Text>
          </TouchableOpacity>
        </ScrollView>
        </View>
      )
    }
    else {
      return (
        <View style={styles.QuizContainer}>
          <ScrollView>
            <Ionicons style={{marginTop: 50, marginBottom: 50, textAlign: 'center'}} name="md-clipboard" size={32} color="black" />

            <Text style={styles.headText}>Quiz Over!</Text>

            <Text>Your Score: {(this.state.correct / this.state.cards.length) * 100}%</Text>

            <TouchableOpacity style={styles.btnPurple} onPress={() => this.restart()}>
              <Text style={styles.textWhite}>Restart Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnOrange} onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.textWhite}>Back To Deck</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )
    }

  }
}

// Redux Connect
function mapStateToProps ({decks}) {
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
export default connect(mapStateToProps, mapDispatchToProps)(QuizView)
