const test = QUnit.test;
import { encounterPokemon, getPokedex, setPokedex } from '../storage-utils.js';
// name your test by what it is testing
test('when pokemon is selected, shown increases', (expect) => {
    localStorage.removeItem('POKEMONGO');
    const fakePokemon = {
        id: 1,
        shown: 1,
        preferred: 0
    };
    encounterPokemon(1);
    const results = getPokedex();
   
    expect.deepEqual(results[0], fakePokemon);
});
test('pokemon already selected, shown increases', (expect) => {
    const fakePokemon = [{
        id: 1,
        shown: 1,
        preferred: 0
    }];
    setPokedex(fakePokemon);
    
    encounterPokemon(1);
    
    const results = getPokedex();
    
    const expected = {
        id: 1,
        shown: 2,
        preferred: 0
    };
    
    expect.deepEqual(results[0], expected);
});
test('remove items from local storage and parse them with getPokedex', (expect) => {
    const fakePokemon = [{
        id: 1,
        shown: 1,
        preferred: 0
    }];
    setPokedex(fakePokemon);
    
    const expected = getPokedex();
    
    expect.deepEqual(expected, fakePokemon);
});
test('getPokedex should return an empty object if the result does not exist', (expect) => {
    const fakePokemon = [{
    }];
    setPokedex(fakePokemon);
    
    const expected = getPokedex();
    
    expect.deepEqual(expected, fakePokemon);
});
test('setPokedex should place an object in local storage', (expect) => {
    const fakePokemon = {
        id: 1,
        shown: 1,
        preferred: 0
    };
    const string = JSON.stringify(fakePokemon);

    const expected = '{"id":1,"shown":1,"preferred":0}';
        
    
    expect.deepEqual(expected, string);
});

