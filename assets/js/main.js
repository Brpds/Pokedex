

const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
/*A arrow function '=>' diminui a verbosidade do código, substituindo 
a palavra function. quando declarada, se tiver apenas uma linha, pode ser 
escrita na forma abaixo: */
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))
    