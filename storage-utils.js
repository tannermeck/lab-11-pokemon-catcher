export function findById(items, id){
    for (let item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function encounterPokemon(id){
    const pokemonString = localStorage.getItem('POKEMONGO');
    const pokemonParse = JSON.parse(pokemonString);
    const 
}