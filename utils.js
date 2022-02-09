export function makeCard(pokemon) {
    const div = document.createElement('div');
    div.classList.add('card');
    const name = document.createElement('h3');
    const hp = document.createElement('p');
    hp.classList.add('hp');
    const attack = document.createElement('p');
    attack.classList.add('attack');
    const img = document.createElement('img');
    const defense = document.createElement('p');
    defense.classList.add('defense');
    const type = document.createElement('p');
    type.classList.add('type');
    const a = document.createElement('a');

    name.textContent = pokemon.pokemon.toUpperCase();
    hp.textContent = 'HP: ' + pokemon.hp;
    attack.textContent = 'ATTACK: ' + pokemon.attack;
    defense.textContent = 'DEFENSE: ' + pokemon.defense;
    type.textContent = 'TYPE: ' + pokemon.type_1.toUpperCase();
    img.src = pokemon.url_image;
    a.href = pokemon.pokedex;

    div.append(name, hp, attack, defense, type, img);
    a.append(div);

    return a;
}

export function renderPokemon(pokemon){
    const a = document.createElement('a');
    const div = document.createElement('div');
    div.classList.add('select-card');
    const h4 = document.createElement('h4');
    h4.classList.add('select-name');
    const img = document.createElement('img');

    h4.textContent = pokemon.pokemon.toUpperCase();
    img.src = pokemon.url_image;
    a.href = `./pokemon/?pokemon=${pokemon.pokemon}`;
    div.append(h4, img);
    a.append(div);
    return a;
}

export async function findById(id, data) {
    return data.find((item) => item.pokemon === id);
}