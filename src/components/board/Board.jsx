import React from 'react';
import './Board.css'
import Square from '../square/Square';

export default class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
    render() {
        let i=-1;
        return (
            <div>
                {
                    this.props.longueur.map( longueur => (
                            <div key={longueur.id} className="board-row"> 
                                {
                                    this.props.largeur.map( largeur => {
                                        i++;
                                        return (
                                            <span key={largeur.id}>
                                                {this.renderSquare(i)} 
                                            </span>
                                        );  
                                    })
                                }
                            </div>
                    ))
                }
            </div>
        );  
    }
}