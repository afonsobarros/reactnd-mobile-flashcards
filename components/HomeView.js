// Imports
import React, { Component } from 'react';
import { Platform, Text, View, FlatList, TouchableOpacity, TouchableHighlight, Switch, Animated } from 'react-native';
import styles from '../styles'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
import { addDeck, addCard } from '../actions'
import { NavigationActions, TabNavigator, StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { purple, white } from '../styles/colors'


// Component Class
class HomeView extends Component {
  state = {
    opacity: new Animated.Value(0)
  }

  constructor(props) {
    super(props)
    this.updateHomeView = this.updateHomeView.bind(this);
  }

  updateHomeView(callback) {
    console.log('updateHomeView')
    this.forceUpdate(() => {
      if (callback) {
        callback()
      }
    });
  }

  componentDidMount() {
    let { opacity } = this.state
    Animated.timing(opacity, { toValue: 1, duration: 500 }).start()
  }

  renderItem = (item) => {
    return (
      <TouchableHighlight style={styles.deckItemBtn} onPress={() => this.props.navigation.navigate(
        'Decks', 
        { deckId: item.item.id, title: item.item.title, updateHomeView:  this.updateHomeView })}>
        <View style={styles.deckItemView}>
          <Ionicons name="md-list-box" size={32} color={purple} />
          <View>
            <Text style={styles.headText}>{item.item.title}</Text>
            <Text style={{ justifyContent: 'center' , textAlign:'center'}}>{item.item.questions.length + " Card"+ (item.item.questions.length === 1 ? '':'s')}              
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  getKey(item, index) {
    return item.id
  }

  render() {
    let { opacity } = this.state

    let decks = [];
    Object.keys(this.props.decks).map((deckId, index) => {
      let deck = this.props.decks[deckId];
      decks.push(deck)
    });

    return (
      <View style={styles.ViewContainer}>
        <Animated.View style={{ opacity, flex: 1 }}>
          <View style={styles.container_two}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.titles}>
                {decks.length + " Deck" + (decks.length != 1 ? 's' : '')}
              </Text>
            </View>
            <View style={styles.container_stretch}>
              <FlatList style={styles.list} data={decks} renderItem={this.renderItem} keyExtractor={this.getKey} />
            </View>
            <TouchableOpacity style={styles.btnOne}
              onPress={() => this.props.navigation.navigate("CreateDeckView")}>
              <Text style={styles.textWhite}>Add Deck</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
