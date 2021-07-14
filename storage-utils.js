export function findById(items, id){
    for (let item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function encounterPokemon(id){
    const results = getPokedex();
    const item = findById(results, id);
    if (!item) {
        const newItem = {
            id: id,
            shown: 1,
            preferred: 0
        }; results.push(newItem);
    } else {
        item.shown++;
    } 
    setPokedex(results);
}

export function getPokedex(){
    const resultsString = localStorage.getItem('POKEMONGO') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function setPokedex(results){
    localStorage.setItem('POKEMONGO', JSON.stringify(results));
}

export function capturePokemon(id){
    const results = getPokedex();
    const item = findById(results, id);
    item.preferred++;
    setPokedex(results);
}
