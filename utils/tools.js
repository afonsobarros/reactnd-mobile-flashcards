export function generateId() {
  return new Date().getTime();
}

export function newDeck(title) {
  return {
    id: generateId(),
    title: title,
    questions: []
  }
}

export function newCard(question, answer) {
  return {
    id: generateId(),
    question: question,
    answer: answer
  }
}