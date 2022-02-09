import { findById, makeCard } from '../utils.js';
import { getPokedex } from '../fetch.js';

const pokemonEl = document.getElementById('pokemon-card');

const params = new URLSearchParams(window.location.search);

async function renderCard() {
    const data = await getPokedex();
    
    const pokemon = await findById(params.get('pokemon'), data);
    const card = makeCard(pokemon);

    pokemonEl.append(card);

}
renderCard();
