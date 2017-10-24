import React, { Component } from 'react';
import { Platform, Text, View, StatusBar, Animated, AsyncStorage } from 'react-native';
import { NavigationActions, TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Constants } from 'expo'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import styles from './styles'
import { purple, white, grey } from './styles/colors'

import HomeView from './components/HomeView'
import QuizView from './components/QuizView'
import CreateDeckView from './components/CreateDeckView'
import DeckView from './components/DeckView'
import AddCardView from './components/AddCardView'

import { setLocalNotification, clearLocalNotifications } from './utils/tools'

function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const tabsConfig = {
  tabBarPosition: "top",
  tabBarOptions: {
    showIcon:false,
    activeBackgroundColor: purple,
    inactiveBackgroundColor: white,
    activeTintColor: white,
    inactiveTintColor: grey,
    style: {
      backgroundColor: purple,
    },
  }
}

const noTabs = {
  swipeEnabled:false,
  tabBarOptions: {
    style: {
      display:'none'
    },
  }
}

const MainTabs = TabNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: {
      title: "Decks"
    }
  },
  CreateDeckView: {
    screen: CreateDeckView,
    navigationOptions: {
      title: "Add Deck"
    }
  }
}, tabsConfig,);

const DeckTabs = TabNavigator({

  Home: {
    screen: DeckView,
    navigationOptions: {
      title: "Deck"
    }
  },
  AddCardView: {
    screen: AddCardView,
    navigationOptions: {
      title: "Add Card"
    }
  }
},noTabs);


const Stack = StackNavigator({
  Home: {
    screen: MainTabs,
    navigationOptions: {
      title: "Mobile Flashcards"
    }
  },
  Decks: {
    screen: DeckTabs,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title} Deck`
    }),
  },
  Quiz: {
    screen: QuizView,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.deck.title} Quiz`
    }),
  }
})

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashcardsStatusBar backgroundColor={purple} barStyle="light-content" />
          <Stack />
        </View>
      </Provider>
    );
  }
}