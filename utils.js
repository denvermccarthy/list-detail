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