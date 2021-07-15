// import functions
import pokemonArray from './data/pokemon.js';
import { capturePokemon, encounterPokemon } from './storage-utils.js';
// reference needed DOM elements
const radio1 = document.getElementById('pokemon1-radio');
const image1 = document.getElementById('pokemon1-image');

const radio2 = document.getElementById('pokemon2-radio');
const image2 = document.getElementById('pokemon2-image');

const radio3 = document.getElementById('pokemon3-radio');
const image3 = document.getElementById('pokemon3-image');
const submitBtn = document.getElementById('submit-button');
const playsLeft = document.getElementById('plays-left');

let totalPlays = 0;

export function renderPokemon(){
    totalPlays++;
    let randNum1 = Math.floor(Math.random() * pokemonArray.length);
    let randNum2 = Math.floor(Math.random() * pokemonArray.length);
    let randNum3 = Math.floor(Math.random() * pokemonArray.length);
    
    while (randNum1 === randNum2 || randNum2 === randNum3 || randNum1 === randNum3) {
        randNum2 = Math.floor(Math.random() * pokemonArray.length);
        randNum3 = Math.floor(Math.random() * pokemonArray.length);
    }
    
    let pokemon1 = pokemonArray[randNum1];
    let pokemon2 = pokemonArray[randNum2];
    let pokemon3 = pokemonArray[randNum3];

    radio1.value = pokemon1.id;
    radio1.checked = false;
    image1.src = pokemon1.url_image;
    encounterPokemon(pokemon1.id);

    radio2.value = pokemon2.id;
    radio2.checked = false;
    image2.src = pokemon2.url_image;
    encounterPokemon(pokemon2.id);


    radio3.value = pokemon3.id;
    radio3.checked = false;
    image3.src = pokemon3.url_image;
    encounterPokemon(pokemon3.id);

    playsLeft.textContent = `${totalPlays - 1}/10`;
}
  
localStorage.removeItem('POKEMONGO');
renderPokemon();

submitBtn.addEventListener('click', () => {
    const selectedPokemon = document.querySelector('input[type="radio"]:checked');
    const userChoice = Number(selectedPokemon.value); 
    capturePokemon(userChoice);
    
    if (totalPlays < 10){
        renderPokemon();
    } else {
        window.location.replace('./results/index.html');
    }
  
});