import { ADD_DECK, ADD_CARD } from '../actions'
import { generateId } from '../utils/tools'


const beginnerState = {
  React: {
    id: 'React',
    title: 'React',
    questions: [
      {
        id: generateId(),
        question: 'React is A JavaScript library for building user interfaces',
        answer: true
      },
      {
        id: generateId(),
        question: 'React is Declarative',
        answer: true
      },
      {
        id: generateId(),
        question: 'React is not Component-Based',
        answer: false
      },
      {
        id: generateId(),
        question: 'React DOM uses HTML attribute names instead of camelCase property naming convention.',
        answer: false
      }, 
      {
        id: generateId(),
        question: 'JSX is a syntax extension to JavaScript',
        answer: true
      }
    ]
  },
  Javascript: {
    id: 'Javascript',
    title: 'Javascript',
    questions: [
      {
        id: generateId(),
        question: 'The first JavaScript engine was created by Brendan Eich at Netscape,',
        answer: true
      },
      {
        id:generateId(),
        question: 'SPA stands for Single Page Application',
        answer: true
      }
    ]
  }
}

export default function decks(state = beginnerState, action){
  switch (action.type) {

    case ADD_DECK:
      return newState = {
        ...state,
        [action.deck.id]: action.deck};

    case ADD_CARD:
      var newState = state;
      newState[action.deckId].questions.push(action.card);
      return newState

    default:
      return state
  }
}
