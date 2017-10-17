export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck: deck
  }
}

export function addCard(card, deckId) {
  return {
    type: ADD_CARD,
    card: card,
    deck_id: deckId
  }
}
