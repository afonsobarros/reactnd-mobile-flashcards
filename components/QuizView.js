// Imports
import React, { Component } from 'react';
import { Platform, Text, TextInput, View, FlatList, TouchableOpacity, TouchableHighlight, ScrollView, Animated } from 'react-native';
import styles from '../styles'
import { connect } from 'react-redux'
import reducer from '../reducers'
import { addDeck, addCard } from '../actions'
import { NavigationActions, TabNavigator, StackNavigator } from 'react-navigation';

import { white, black, purple, gray, orange } from '../styles/colors'
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
    if (guess === card.answer) {
      this.setState((prevState) => {
        return { answerAsText: "", correct: prevState.correct + 1, currentQuestion: prevState.currentQuestion + 1 }
      })
    }
    else {
      this.setState((prevState) => {
        return { answerAsText: "", wrong: prevState.wrong + 1, currentQuestion: prevState.currentQuestion + 1 }
      })
    }
  }

  restart() {
    this.setState({ currentQuestion: 0, correct: 0, wrong: 0 });
  }

  render() {
    if (this.state.cards[this.state.currentQuestion] !== undefined) {
      return (
        <View style={styles.ViewContainer}>
          <ScrollView>
            <Text style={{ marginTop: 30, textAlign: 'center' }}>{`Question ${this.state.currentQuestion + 1} of ${this.state.cards.length}`}</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 50 }}>
              <Text style={{ margin: 10 }}>Correct: {this.state.correct}</Text>
              <Text style={{ margin: 10 }}>Wrong: {this.state.wrong}</Text>
            </View>
            <Text style={styles.headTextCenter}>{this.state.cards[this.state.currentQuestion].question}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, marginBottom: 30 }}>

              <TouchableOpacity style={styles.btnPurple} onPress={() => this.tryGuess(false)}>
                <Ionicons name="md-close-circle" size={32} color="white" style={{ textAlign: 'center' }} />
                <Text style={styles.textWhite}>False</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnOrange} onPress={() => this.tryGuess(true)}>
                <Ionicons name="md-checkmark-circle" size={32} color="white" style={{ textAlign: 'center' }} />
                <Text style={styles.textWhite}>True</Text>
              </TouchableOpacity>

            </View>

            <Text style={{ margin: 20, textAlign: 'center' }}>{this.state.answerAsText}</Text>


            <TouchableOpacity style={styles.btnOrange} onPress={() => this.setState({ answerAsText: String(this.state.cards[this.state.currentQuestion].answer) })}>
              <Text style={styles.textWhite} >Show Answer</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

              <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.goBack()}>
                <Text style={styles.textWhite}>Back to Deck</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnPurple} onPress={() => this.restart()}>
                <Text style={styles.textWhite}>Restart Quiz</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
      )
    }
    else {
      let score = (this.state.correct / this.state.cards.length) * 100;
      return (
        <View style={styles.QuizContainer}>
          <ScrollView>
            <Ionicons style={{ marginTop: 50, textAlign: 'center' }} name="md-clipboard" size={32} color={purple} />
            <Text style={[styles.headText, { marginBottom: 50 }]}>Quiz Over!</Text>


            <Text style={{ textAlign: 'center', marginBottom: 20 }}>Your Score: {score}%</Text>
            <Ionicons style={{ textAlign: 'center', marginBottom: 50 }} name={score > 50 ? "md-happy" : 'md-sad'} size={32} color={purple} />

            <TouchableOpacity style={styles.btnPurple} onPress={() => this.restart()}>
              <Ionicons style={{ textAlign: 'center' }} name="md-repeat" size={32} color="white" />
              <Text style={styles.textWhite}>Restart Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnOrange} onPress={() => this.props.navigation.goBack()}>
              <Ionicons style={{ textAlign: 'center' }} name="md-return-left" size={32} color="white" />
              <Text style={styles.textWhite}>Back to Deck</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )
    }

  }
}

// Redux Connect
function mapStateToProps({ decks }) {
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
