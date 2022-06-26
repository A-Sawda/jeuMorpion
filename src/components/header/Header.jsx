import React from 'react';
import './header.css';

export default function Header(props) {
    if (!props.hide.hideForm) {
        return (
            <div className='header'>
                <span className='header--Menu--Clicked' onClick={props.handleClickPersonnalize}>Personnaliser le jeu</span>
                <span className='header--Menu' onClick={props.handleClickGame}> Faire une partie</span>
                <span className='header--Menu' onClick={props.handleClickRules}>Règles du jeu</span>
            </div>
        )
    }
    if (!props.hide.hideGame) {
        return (
            <div className='header'>
                <span className='header--Menu' onClick={props.handleClickPersonnalize}>Personnaliser le jeu</span>
                <span className='header--Menu--Clicked' onClick={props.handleClickGame}> Faire une partie</span>
                <span className='header--Menu' onClick={props.handleClickRules}>Règles du jeu</span>
            </div>
        )
    }
    if (!props.hide.hideRules) {
        return (
            <div className='header'>
                <span className='header--Menu' onClick={props.handleClickPersonnalize}>Personnaliser le jeu</span>
                <span className='header--Menu' onClick={props.handleClickGame}> Faire une partie</span>
                <span className='header--Menu--Clicked' onClick={props.handleClickRules}>Règles du jeu</span>
            </div>
        )
    }
}