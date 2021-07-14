export function findById(items, id){
    for (let item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function encounterPokemon(id){
    const resultsString = localStorage.getItem('POKEMONGO') || '[]';
    const results = JSON.parse(resultsString);
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
    localStorage.setItem('POKEMONGO', JSON.stringify(results));
}