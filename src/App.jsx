import React from 'react';
import './index.css';
import Game from './components/game/Game'
import Header from './components/header/Header'
import Form from './components/form/Form'
import Rules from './components/rules/Rules'
import Footer from './components/footer/Footer'

// ========================================

const App = () => {

  let [formData, setFormData] = React.useState({
    length: 3,
    width: 3,
    alignment: 3,
    nbGamer: 2,
  })

  let longueur = [];
  for (let i = 1; i <= formData.length; i++) {
    longueur.push({ id: i, value: i })
  }

  let largeur = [];
  for (let i = 1; i <= formData.width; i++) {
    largeur.push({ id: i, value: i })
  }

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
    const lg= formData.length>=formData.width?formData.width:formData.length;
    if(formData.alignment>=lg){
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          alignment:lg,
        }
      })
    }
    console.log('sada', lg, formData.alignment)
  }

  let [hideData, setHideData] = React.useState({
    hideGame: true,
    hideForm: false,
    hideRules: true,
  })

  function handleClickPersonnalize() {
    window.location.reload(false);
    setHideData(prevHideData => {
      return {
        ...prevHideData,
        hideGame: true,
        hideForm: false,
        hideRules: true,
      }
    })
  }

  function handleClickGame() {
    setHideData(prevHideData => {
      return {
        ...prevHideData,
        hideGame: false,
        hideForm: true,
        hideRules: true,
      }
    })
  }

  function handleClickRules() {
    setHideData(prevHideData => {
      return {
        ...prevHideData,
        hideGame: true,
        hideForm: true,
        hideRules: false,
      }
    })
  }

  let [gamers, setGamers] = React.useState([]);

  /*function handleChangeGamersNames(event) {
    console.log('event, name, value', event.target.name.value);
  }*/

 /* function handleChangeGamersPoints(index, newPoints) {
    console.log('index, newPoints', index, newPoints);
    // 1. Make a shallow copy of the array
    let temp_state = [...gamers];
    
    // 2. Make a shallow copy of the element you want to mutate
    let temp_element = { ...temp_state[index] };
    
    // 3. Update the property you're interested in
    temp_element.points = temp_element.points+newPoints;
    
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    temp_state[index] = temp_element;
    
    // 5. Set the state to our new copy
    console.log('temp_state', index, newPoints);
    setGamers(temp_state);
  }

  function updateGamers() {
    for (let i = 0; i < formData.nbGamer; i++) {
      setGamers(prevGamers => [...prevGamers, { id: i, name: 'Joueur ' + i, points: 0 }])
    }
  }*/

  return (
    <>
      <Header
        handleClickPersonnalize={handleClickPersonnalize}
        handleClickGame={handleClickGame}
        handleClickRules={handleClickRules}
        hide={hideData}
      />
      <Game
        largeur={largeur}
        longueur={longueur}
        alignment={parseInt(formData.alignment)}
        hide={hideData.hideGame}
      />
      <Form
        handleChange={handleChange}
        length={formData.length}
        width={formData.width}
        alignment={formData.alignment}
        nbGamer={formData.nbGamer}
        hide={hideData.hideForm}
        handleClickGame={handleClickGame}
      />
      <Rules
        hide={hideData.hideRules}
      />
      <Footer/>
    </>
  )
}

export default App

