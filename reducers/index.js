import { ADD_DECK, ADD_CARD } from '../actions'
import { generateId } from '../utils/tools'


const beginnerState = {
  React: {
    id: 'React',
    title: 'React',
    questions: [
      {
        id: generateId(),
        question: 'React is based on imperative programming',
        answer: false
      },
      {
        id: generateId(),
        question: 'React can render on client-side and server-side',
        answer: true
      },
      {
        id: generateId(),
        question: 'React was started by the developers at Twitter',
        answer: false
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
