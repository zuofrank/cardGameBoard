import React from 'react'  
import FieldSelf from './components/FieldSelf'
import FieldOpponent from './components/FieldOpponent'
import Opponent from './components/Opponent'
import Self from './components/Self'

//class App extends React.Component stuff
//import HandCard from './HandCard'

import Hand from './components/Hand'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <Opponent/>
          <FieldOpponent/>
          <FieldSelf/>
          <Self/>
        </div>
        <div className='container'>
          <Hand/>
          
        </div>
      </header>
    </div>
    
  )
}


/*
//card functionality
function Card(props) {
  return (
    <button className="card" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

//view cards on the field
class Board extends React.Component {

  renderCard(i) {
    return (
      <Card
        value={this.props.cards[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="field">
          {this.renderCard(0)}
          {this.renderCard(1)}
          {this.renderCard(2)}
          {this.renderCard(3)}
        </div>
        <div className="field">
          {this.renderCard(4)}
          {this.renderCard(5)}
          {this.renderCard(6)}
          {this.renderCard(7)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          cards: Array(8).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const cards = current.cards.slice();
    cards[i] = this.state.xIsNext ? "X" : "O";
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    return (
      <div className="game">
        <div className="game-board">
          <Board
            cards={current.cards}
            onClick={i => this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
}
*/

export default App