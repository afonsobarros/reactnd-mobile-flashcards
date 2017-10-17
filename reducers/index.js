import { ADD_DECK, ADD_CARD } from '../actions'

const beginnerState = {
  React: {
    id: new Date().getTime(),
    title: 'React',
    questions: [
      {
        id: new Date().getTime(),
        question: 'React is based on imperative programming',
        answer: false
      },
      {
        id: new Date().getTime(),
        question: 'React can render on client-side and server-side',
        answer: true
      },
      {
        id: new Date().getTime(),
        question: 'React was started by the developers at Twitter',
        answer: false
      }
    ]
  },
  JavaScript: {
    id: new Date().getTime(),
    title: 'JavaScript',
    questions: [
      {
        id: new Date().getTime(),
        question: 'The first JavaScript engine was created by Brendan Eich at Netscape',
        answer: true
      }
    ]
  }
}

export default function decks(state = beginnerState, action){
  switch (action.type) {

    case ADD_DECK:
      var newState = {
        ...state,
        [action.deck.id]: action.deck};
      console.log("newState - ", newState);
      return newState

    case ADD_CARD:
      console.log("admit one card");
      var newState = state;
      newState[action.deck_id].questions.push(action.card);
      console.log("newState - ", newState);
      return newState

    default:
      return state
  }
}
