import pokemonArray from '../data/pokemon.js';
import { getPokedex, findById } from '../storage-utils.js';


const resultList = document.getElementById('result-list');
const results = getPokedex();
for (let item of results){
    const pokemon = findById(pokemonArray, item.id) //FOR CHART??
       
    const resultImg = document.createElement('img');
    resultImg.src = pokemon.url_image;

    const encountered = document.createElement('p');
    encountered.textContent = `Encountered: ${item.shown}`;

    const captured = document.createElement('p');
    captured.textContent = `Captured: ${item.preferred}`;
    
    const resultDiv = document.createElement('div'); //explain classList.add ??
    resultDiv.classList.add('result');

    resultDiv.appendChild(resultImg);
    resultDiv.appendChild(encountered);
    resultDiv.appendChild(captured);
    
    resultList.appendChild(resultDiv);
}