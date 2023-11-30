const pokemonListGSC = document.getElementById('pokemonListGSC');
const maxRecords = 151;
const offset = 0;
const showStats = document.getElementById('statList');


function loadPokemonList(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        const newPokemon = pokemonList.map((pokemon) => `
            <li class="pokeHover" onclick="loadStats(${pokemon.number},'${pokemon.name}')" id="pokeHover${pokemon.number}"><span>&nbsp; ${pokemon.name}</span></li>
        `
        ).join(' ')

        // while(quantity < maxRecords){
        //     pokemonListGSC.innerHTML += newPokemon;
        //     quantity++;
        //     console.log(quantity)
        // }

        pokemonListGSC.innerHTML += newPokemon;
        return newPokemon;
    })


}

loadPokemonList(0, 151);

function loadStats (number, name){
    pokeApi.getPokemons(number-1, 1).then((pokemonList = []) => {
        if(pokemonList.length > 0){
            const selectedPokemon = pokemonList[0];
            const statList = selectedPokemon.stats.map((stat) => `<li class="stat ${stat}">${stat}</li>`).join('');
            showStats.innerHTML = statList;
        }
        // const statList = pokemonList.map((pokemon) => `
        //     ${pokemon.stats.map((stat) => (`<li class="stat ${stat}">${stat}</li>`))}
        // `
        // ).join('')
        document.getElementById('showImage').innerHTML = `
        <img class="displayImage" src="./assets/images/Pokemons/${number}.gif" alt="${name}">
        <p id="pokemonName">${name}</p>
        `
    })
    
}


