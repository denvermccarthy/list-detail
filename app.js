// import functions and grab DOM elements
import { getPokedex } from './fetch.js';
import { renderPokemon } from './utils.js';

const pokemonContainer = document.getElementById('pokemon-container');

// let state
async function renderPokemons() {
    const pokemons = await getPokedex();
    // pokemonContainer.innerHTML = '';
    for (const pokemon of pokemons) {
        const poke = renderPokemon(pokemon);
        pokemonContainer.append(poke);
    }
}

renderPokemons();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
