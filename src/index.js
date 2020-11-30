import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Card extends React.Component {
    render() {
        return (
            <button className = "card" 
             onClick = {() => this.props.onClick()}>
                {this.props.flipstate ? this.props.value : null}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardvalues: Array(12).fill(0).map(function(k,ind){return Math.floor(ind/2)}),
            cards: Array(12).fill(false),
        };
    }
    handleClick(i) {
        const cards = this.state.cards.slice();
        cards[i] = !cards[i];
        this.setState({cards: cards});
    }
    renderCard(i,f) {
        return ( <Card 
            value = {this.state.cardvalues[i]}
            flipstate = {this.state.cards[i]}
            onClick = {() => this.handleClick(i)}
        />);
    }

    render() {
        const status = 'Player 1'
        const score1 = 'Player 1 Score: ' + 1
        const score2 = 'Player 2 Score: ' + 2
        return (
            <div>
                <div className = "status">{status}</div>
                <div className = "board-row">
                    {this.renderCard(0,false)}
                    {this.renderCard(1,false)}
                    {this.renderCard(2,false)}
                    {this.renderCard(3,false)}
                </div>
                <div className = "board-row">
                    {this.renderCard(4,false)}
                    {this.renderCard(5,false)}
                    {this.renderCard(6,false)}
                    {this.renderCard(7,false)}
                </div>
                <div className = "board-row">
                    {this.renderCard(8,false)}
                    {this.renderCard(9,false)}
                    {this.renderCard(10,false)}
                    {this.renderCard(11,false)}
                </div>
                <div className = "scores">{score1}</div>
                <div className = "scores">{score2}</div>
            </div>
        )
    }
}
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );