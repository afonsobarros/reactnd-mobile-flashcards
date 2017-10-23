import { StyleSheet } from 'react-native'
import { white, black, purple, gray, orange } from '../styles/colors'

const styles = StyleSheet.create({
  titles: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 25,
  },

  headText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  headTextCenter: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: gray,
    borderRadius: 3
  },
  btnOrange: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: orange,
    borderRadius: 3
  },
  btnPurple: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: purple,
    borderRadius: 3
  },
  
  textWhite: {
    color: '#fff'
  },

  textBlack: {
    color: black
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },  
  ViewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 10,
  },
  QuizContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10
  },
  container_two: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 10
  },
  container_stretch: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10
  },

  textField: {
    height: 45,
    margin: 10,
    marginTop: 50,
    marginBottom: 50,
    padding: 3,
    borderRadius: 3,
    borderColor: gray,
    borderWidth: 1
  },

  list: {
    flex: 1
  },
  deckItemBtn: {
    flex: 1,
    justifyContent: 'center'
  },
  deckItemView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: gray,
    padding: 10
  }
})

export default styles
