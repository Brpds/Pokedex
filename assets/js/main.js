const pokemonOl = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10;
let offset = 0;
const maxRecords = 151;
let backToTopButton = document.getElementById('backToTop')

//adiciona um ponto de debug mais facilmente percebido
//debugger

// function convertPokemonToLi(pokemon){
//     return `
//     <li class="pokemon ${pokemon.type}">
//                 <span class="number">#${pokemon.number}</span>
//                 <span class="name">${pokemon.name}</span>

//                 <div class="detail">
//                     <ol class="types">
//                         ${pokemon.types.map((type) => `<li class = "type ${type}">${type}</li>`).join('')}
//                     </ol>
//                     <img src="${pokemon.photo}" 
//                     alt="${pokemon.name}">
//                 </div>
//             </li>
//             `
// }


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        const newHtml = pokemonList.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
        
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class = "type ${type}">${type}</li>`).join('')}
                            </ol>
                            <img src="${pokemon.photo}" 
                            alt="${pokemon.name}">
                        </div>
                    </li>
                    `).join(' ')
        pokemonOl.innerHTML += newHtml;
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit);
        
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
            loadPokemonItens(offset, limit);
    }

})

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}
