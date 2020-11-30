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
            player1Turn: true,
            chosen: Array(2).fill(-1),
            scores: Array(2).fill(0),
        };
    }
    handleClick(i) {
        const cards = this.state.cards.slice();
        const curchosen = this.state.chosen.slice();
        const newscores = this.state.scores.slice();
        if (curchosen[0] === -1) {
            curchosen[0] = i
            cards[i] = !cards[i];
            this.setState({cards:cards, chosen: curchosen});
        } 
        else if (curchosen[1] === -1){
            curchosen[1] = i
            cards[i] = !cards[i]
            this.setState({cards: cards, chosen: curchosen});  //show cards
            //alert(curchosen)
            if (this.state.cardvalues[curchosen[0]] === this.state.cardvalues[curchosen[1]]) {
                if (this.state.player1Turn) {
                    newscores[0] = newscores[0]+1
                } else {
                    newscores[1] = newscores[1]+1
                } 
                this.setState({chosen: Array(2).fill(-1),scores: newscores});
            } else {
                const updatecards = cards.slice();
                for(var k = 0; k < curchosen.length; k++) {
                    updatecards[curchosen[k]] = !updatecards[curchosen[k]];  //reflip cards
                }
                this.setState({chosen: Array(2).fill(-1), player1Turn: !this.state.player1Turn});
                setTimeout(() => this.setState({cards: updatecards}),1000);  //make cards go away 
            };
        }
    }
    renderCard(i,f) {
        return ( <Card 
            value = {this.state.cardvalues[i]}
            flipstate = {this.state.cards[i]}
            onClick = {() => this.handleClick(i)}
        />);
    }

    render() {
        const status = this.state.player1Turn ? 'Player 1' : 'Player 2';
        const score1 = 'Player 1 Score: ' + this.state.scores[0];
        const score2 = 'Player 2 Score: ' + this.state.scores[1];
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