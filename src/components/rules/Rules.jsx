import React from 'react'

export default function(props){
    return(
        <div hidden={props.hide}>
            <h1>Règles du jeu : </h1>
            <p>
                Les joueurs inscrivent tour à tour leur symbole sur une grille (dont la limite 3*3 par défaut, peut
                etre personnalisée dans le champ personnalisé le jeu) sur lequel on joue. Le premier qui parvient 
                à aligner trois (par défaut, peut etre personnalisé dans le champ personnalisé le jeu) de ses 
                symboles horizontalement, verticalement ou en diagonale gagne un point.
            </p>
        </div>
    ) 
}