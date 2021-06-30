import logo from './logo.svg';
import Score from './components/Score';
import Solution from './components/Solution ';
import Letter from './components/Letter';
import Letters from './components/Letters';
import './App.css';
import { Component } from 'react';
import EndGame from './components/EndGame';


class App extends Component {

  constructor() {
    super()
    this.state = {
      solution: {
        word: 'ALAM',
        hint: 'Your ideal mood when coding.'
      },
      score: 100,
      // letterStatus : this.generateLetterStatuses()
      letterStatus: {
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
        O: false,
        P: false,
        Q: false,
        R: false,
        S: false,
        T: false,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: false,
        Z: false
      },
      finished: false,
      coutOfLettersInWord: 0,
      ifUserWin : false,
      colorScore : 'high'
    }
  }

  // generateLetterStatuses() {
  //   let letterStatus = {}
  //   for (let i = 65; i < 91; i++) {
  //     letterStatus[String.fromCharCode(i)] = false
  //   }
  //   return letterStatus
  // }

  selectLetter = letter => {
    let currentLetters = { ...this.state.letterStatus }
    let checkIfIN = this.state.solution.word.indexOf(letter) >= 0 ? true : false
    currentLetters[letter] = true

    this.changeScoreAndRemoveLitterFromWord(checkIfIN, letter)
    this.setState({
      letterStatus: currentLetters
    })


  }

  checkIfDoneWithWord = (letter) => {
    let coutOfLettersInWord = this.state.coutOfLettersInWord
    var count = (this.state.solution.word.match(letter) || []).length;
    coutOfLettersInWord = coutOfLettersInWord + count
    if (coutOfLettersInWord == this.state.solution.word.length - 1) {
      this.setState({ finished : true , ifUserWin : true})
    }
    this.setState({ coutOfLettersInWord })
  }

  changeScoreAndRemoveLitterFromWord = (succes, letter) => {
    let score = this.state.score
    let colorScore = this.state.colorScore
    if (succes) {
      score = score + 5
      this.checkIfDoneWithWord(letter)
    }
    else {
      score = score - 20
      if(score < 0){
        this.setState({ finished : true })
      }
    }
    if(score >= 80){
      colorScore = 'high'
    }
    else if(score > 50 && score < 80){
      colorScore = 'medium'
    }
    else{
      colorScore = 'low'
    }
    this.setState({
      score , colorScore
    })
  }

  notFinished = () => {
    return (
      <div>
        <Score colorScore ={this.state.colorScore} score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter}></Letters></div>)

  }

  render() {
    return (
      <div className="App"> {this.state.finished ? <EndGame ifUserWin = {this.state.ifUserWin}/> : this.notFinished()} </div>
    )
  }
}

export default App;
