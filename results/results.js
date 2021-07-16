import pokemonArray from '../data/pokemon.js';
import { getPokedex, findById } from '../storage-utils.js';


const resultList = document.getElementById('result-list');
const results = getPokedex();
let names = [];
let shown = [];
let capture = [];
for (let item of results){
    const pokemon = findById(pokemonArray, item.id);
    names.push(pokemon.pokemon);
    shown.push(item.shown);
    capture.push(item.preferred);

    const resultImg = document.createElement('img');
    resultImg.src = pokemon.url_image;

    const pokemonName = document.createElement('p');
    pokemonName.textContent = pokemon.pokemon.toUpperCase();

    const encountered = document.createElement('p');
    encountered.textContent = `Encountered: ${item.shown}`;

    const captured = document.createElement('p');
    captured.textContent = `Captured: ${item.preferred}`;
    
    const resultDiv = document.createElement('div'); 
    resultDiv.classList.add('result');

    resultDiv.appendChild(resultImg);
    resultDiv.appendChild(pokemonName);
    resultDiv.appendChild(encountered);
    resultDiv.appendChild(captured);
    
    resultList.appendChild(resultDiv);
}

var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Encountered Pokemon',
            data: shown,
            backgroundColor: [
                'red'
            ],
            borderWidth: 1
        },
        {
            label: '# of Captured Pokemon',
            data: capture,
            backgroundColor: [
                'blue'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});