export function makeCard(pokemon) {
    const div = document.createElement('div');
    const name = document.createElement('h3');
    const hp = document.createElement('p');
    const attack = document.createElement('p');
    const img = document.createElement('img');
    const defense = document.createElement('p');
    const type = document.createElement('p');
    const a = document.createElement('a');

    name.textContent = pokemon.pokemon;
    hp.textContent = pokemon.hp;
    attack.textContent = pokemon.attack;
    defense.textContent = pokemon.defense;
    type.textContent = pokemon.type_1;
    img.src = pokemon.url_image;
    a.href = pokemon.pokedex;

    div.append(name, hp, attack, defense, type, img);
    a.append(div);

    return a;
}

export function renderPokemon(pokemon){
    const a = document.createElement('a');
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');

    h4.textContent = pokemon.pokemon;
    img.src = pokemon.url_image;
    a.href = `./pokemon/?pokemon=${pokemon.pokemon}`;
    div.append(h4, img);
    a.append(div);
    return a;
}

export async function findById(id, data) {
    return data.find((item) => item.pokemon === id);
}