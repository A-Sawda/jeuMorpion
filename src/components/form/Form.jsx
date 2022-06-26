import React from 'react';
import './form.css';

export default function Form(props) {

    let [hide, setHide] = React.useState(true);

    function handleChange() {
        setHide(false);
        console.log(hide);
    }

    return (
        <div hidden={props.hide}>
            <form>
                <label htmlFor="length">Longueur : </label> <input type="number" name='length'
                    value={props.length} onChange={props.handleChange} />
                <label htmlFor="width">Largeur : </label> <input type="number" name='width'
                    value={props.width} onChange={props.handleChange} />
                <label htmlFor="alignment">Nombre d'alignements pour gagner : </label> <input type="number" name='alignment'
                    value={props.alignment} onChange={props.handleChange} />
                <input type="button" value="Jouer !!" onClick={props.handleClickGame} className="button"/>
            </form>
        </div>
    )
}