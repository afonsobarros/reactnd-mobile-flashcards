// Imports
import React, { Component } from 'react';
import { Platform, Text, TextInput, View, FlatList, TouchableOpacity, TouchableHighlight, Switch, Animated } from 'react-native';
import styles from '../styles'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
import { addDeck, addCard } from '../actions'
import { NavigationActions, TabNavigator, StackNavigator } from 'react-navigation';
import { newCard } from '../utils/tools'
import { white, black, purple, gray, orange } from '../styles/colors'
import { Ionicons } from '@expo/vector-icons';

// Component Class
class AddCardView extends Component {
  state = {
    question: "",
    answer: false,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  onAddCard() {
    if (this.state.question < 3) {
      alert("Question must be at least 3 characters long!");
      return
    }
    else {
      this.addCard()
    }
  }

  addCard() {
    let deckId = this.props.navigation.state.params.deckId;
    let card = newCard(this.state.question, this.state.answer);
    this.props.addCard(card, deckId);
    
    this.props.navigation.state.params.updateDeckView(() => {
      this.setState({ question: "", answer: false });
      this.props.navigation.goBack();
    })

  }

  render() {
    let id = this.props.navigation.state.params.deckId;
    let deck = this.props.decks[id];
    return (
      <View style={styles.ViewContainer}>
        <Ionicons name="md-albums" size={32} color={purple} style={{ textAlign: 'center' }} />
        <Text style={styles.titles}>
          Add a Card to "{deck.title}" Deck
        </Text>

        <TextInput style={styles.input} placeholder="Enter Question"
          value={this.state.question} onChangeText={(question) => this.setState({ question: question })} />

        <Text style={{ margin: 20 , textAlign:'center'}}>Answer</Text>
        
        <View style={{flexDirection: 'row', alignItems:'center', }}>
          <Text style={{ marginRight: 20, flex:1, textAlign:'center' }}>False</Text>
          <Switch value={this.state.answer} onValueChange={(value) => this.setState({ answer: value })} />
          <Text style={{ marginLeft: 20 , flex:1, textAlign:'center'}}>True</Text>
        </View>

        <Text style={{ margin: 15 }}></Text>

        <TouchableOpacity style={styles.btnOrange} onPress={() => this.onAddCard()}>
          <Text style={styles.textWhite}>Add New Card</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddCardView)
