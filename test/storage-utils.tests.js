const test = QUnit.test;
import { encounterPokemon } from '../storage-utils.js';
// name your test by what it is testing
test('when pokemon is selected, shown increases', (expect) => {
    localStorage.removeItem('POKEMONGO');
    const fakePokemon = {
        id: 1,
        shown: 1,
        preferred: 0
    };
    encounterPokemon(1);
    const fakeString = localStorage.getItem('POKEMONGO') || '[]';
    const results = JSON.parse(fakeString);
    
    expect.deepEqual(results[0], fakePokemon);
});
test('pokemon already selected, shown increases', (expect) => {
    const fakePokemon = [{
        id: 1,
        shown: 1,
        preferred: 0
    }];
    localStorage.setItem('POKEMONGO', JSON.stringify(fakePokemon));
    
    encounterPokemon(1);
    
    const fakeString = localStorage.getItem('POKEMONGO') || '[]';
    const results = JSON.parse(fakeString);
    
    const expected = {
        id: 1,
        shown: 2,
        preferred: 0
    };
    
    expect.deepEqual(results[0], expected);
});
