import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import DisplayPokemon from './components/DisplayPokemon'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

const [pokemon, setPokemon] = useState([]);

// useEffect(() => {
//   console.log("Pokemon")
//   Axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
//     .then(res => setPokemon(res.data.results))
//     .catch(err => console.log(err))
// },[])

const getPokemon = () =>{
  Axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
  .then(res => setPokemon(res.data.results))
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
