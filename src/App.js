import React, { useState, useEffect } from 'react';
import DisplayPokemon from './components/DisplayPokemon'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

const [pokemon, setPokemon] = useState([]);

const getPokemon = () =>{
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
  .then(res => res.json())
  .then(res => setPokemon(res.results))
  .catch(err => console.log(err))
}

  return (
  <div className='App'>
      <button 
      className="btn btn-primary m-4"
      onClick={getPokemon}>Pokemon!</button>
      {
        pokemon.map((pokemon,index) => {
          return <DisplayPokemon 
          pokemon={pokemon}
          key={index}/>
        })
      }
  </div>
  );
}

export default App;
