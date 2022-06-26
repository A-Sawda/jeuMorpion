import React from 'react';
import './game.css';
import Board from '../board/Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(this.props.longueur.length * this.props.largeur.length).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: 1
    };
  }

  calculateWinner(squares) {
    let k = 0;
    let line;
    let lines = [];
    //Lignes
    for (let i = 0; i < this.props.longueur.length; i++) {
      line = [];
      for (let j = 0; j < this.props.largeur.length; j++) {
        line.push(k)
        k++;
      }
      lines.push(line)
    }
    //Colonnes
    for (let i = 0; i < this.props.longueur.length; i++) {
      k = i;
      line = [];
      for (let j = 0; j < this.props.largeur.length; j++) {
        line.push(k)
        k = k + this.props.largeur.length;
      }
      lines.push(line)
    }
    //Diagonale droite
    k = 0;
    line = [];
    for (let i = 0; i < this.props.longueur.length; i++) {
      for (let j = 0; j < this.props.largeur.length; j++) {
        if (i === j) {
          line.push(k)
          k = k + this.props.largeur.length + 1;
        }
      }
    }
    lines.push(line)
    //Diagonale gauche
    k = this.props.largeur.length - 1;
    line = [];
    for (let i = 0; i < this.props.longueur.length; i++) {
      for (let j = 0; j < this.props.largeur.length; j++) {
        if (i === j) {
          line.push(k)
          k = k + this.props.largeur.length - 1;
        }
      }
    }
    lines.push(line)
    console.log('line', lines);
    //Le gagnant
    let winner = '';
    for (let line of lines) {
      let i = 0; let k = 1;
      while (i < line.length - 1) {
        if (squares[line[i]] && squares[line[i + 1]] && squares[line[i]] === squares[line[i + 1]]) {
          k++;
          winner = squares[line[i]];
          if (k === this.props.alignment) {
            return winner;
          }
        } else {
          k = 1;
          winner = '';
        }
        i++;
      }
    }
    return null;
  }

  handleClick(i) {
    /*Historique de tous les squares*/
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    /*Objet du dernier squares */
    const current = history[history.length - 1];
    /*Squares correspondant à l'étape du jeu */
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext;
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: this.state.xIsNext === 1 ? 2 : 1
    });
  }

  jumpTo(step, history) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 ? 2 : 1
    });
  }

  jumpTo2(step, history) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 ? 2 : 1
    });
    if (history) {
      this.setState({
        history: history.slice(0, step + 1)
      });
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'De l\'étape : ' + move :
        'Du début du jeu';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move, history)}>{desc}</button>
        </li>
      );
    });
    const moves2 = history.map((step, move2) => {
      const desc = move2 ?
        'De l\'étape : ' + move2 :
        'Du début du jeu';
      return (
        <li key={move2}>
          <button onClick={() => this.jumpTo2(move2, history)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Le gagnant est : " + (winner === 1 ? "Joueur n° 1" : "Joueur n° 2");
    } else {
      status = "Joueur suivant : " + (this.state.xIsNext === 1 ? "Joueur n° 1" : "Joueur n° 2");
    }

    return (
      <div hidden={this.props.hide}>
        <div className="game">
          <div className="game-board">
            <div id='status'>{status}</div>
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
              longueur={this.props.longueur}
              largeur={this.props.largeur} />
          </div>
          <div className="game-info">
            <div>Reprendre le jeu à partir :</div>
            <ol>{moves2}</ol>
          </div>
          <div className="game-info">
            <div>Historique du jeu à partir :</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
}


export default Game