// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderPokemon } from '../utils.js';

const test = QUnit.test;

test('render a pokemon', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href="./pokemon/?pokemon=butterfree"><div><h4>butterfree</h4><img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPokemon({
        pokemon: 'butterfree',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',

    });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
