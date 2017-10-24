# Project Mobile Flashcards

This is an assessment project for Udacity's [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019), developed by [React Training](https://reacttraining.com).

Tested on Android 7.1.0.

## Table of Contents

* [Available Scripts](#available-scripts)
  * [npm install](#npm-install)
  * [npm start](#npm-start)
* [Assessment Requirements](#assessment-requirements)
  * [Specific Assessment Requirements](#specific-assessment-requirements)
  * [Views](#views)
  * [Data](#data)
  
## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm install`

Install the app dependencies.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

## Assessment Requirements

### Specific Assessment Requirements
* Use create-react-native-app to build your project.
* Allow users to create a deck which can hold an unlimited number of cards.
* Allow users to add a card to a specific deck.
* The front of the card should display the question.
* The back of the card should display the answer.
* Users should be able to quiz themselves on a specific deck and receive a score once they're done.
* Users should receive a notification to remind themselves to study if they haven't already for that day.

### Views
Your application should have, at a minimum, five views.

* Deck List View (Default View)
displays the title of each Deck
displays the number of cards in each deck

* Individual Deck View
displays the deck detail (title,number of cards of the Deck
displays an option to start a quiz on this specific deck
An option to add a new question to the deck

* Quiz View
displays a card question
an option to view the answer (flips the card)
a "Correct" button
an "Incorrect" button
the number of cards left in the quiz
Displays the percentage correct once the quiz is complete

* New Deck View
An option to enter in the title for the new deck
An option to submit the new deck title

* New Question View
An option to enter in the question
An option to enter in the answer
An option to submit the new question

### Data
We'll use [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html) to store our decks and flashcards. Redux is optional for this project.

Using AsyncStorage you'll manage an object whose shape is similar to this:

```javascript
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
```
