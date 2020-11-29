import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Card extends React.Component {
    render() {
        return (
            <button className = "card" 
             onClick = {() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Array(12).fill(false),
        };
    }
    handleClick(i) {
        const cards = this.state.cards.slice();
        cards[i] = !cards[i];
        this.setState({cards: cards});
    }
    renderCard(i) {
        return ( <Card 
            value = {i}
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
                    {this.renderCard(0)}
                    {this.renderCard(1)}
                    {this.renderCard(4)}
                    {this.renderCard(3)}
                </div>
                <div className = "board-row">
                    {this.renderCard(0)}
                    {this.renderCard(1)}
                    {this.renderCard(3)}
                    {this.renderCard(2)}
                </div>
                <div className = "board-row">
                    {this.renderCard(5)}
                    {this.renderCard(2)}
                    {this.renderCard(4)}
                    {this.renderCard(5)}
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