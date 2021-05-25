const poke_container = document.getElementById('poke_container');
const pokemon_number = 100;

const fetchPokemon = async () => {
    for(let i=1; i<=pokemon_number; i++){
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    // console.log(pokemon);
    createPokemonCard(pokemon);
}

const createPokemonCard = pokemon => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const {id, name, sprites, types} = pokemon;
    const type = types[0].type.name;
    const pokeInnerHTML = `
        <div class="img-container">
            <img src="${sprites.front_default}" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span> ${type} </span></small>
        </div>
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);

}
fetchPokemon();
