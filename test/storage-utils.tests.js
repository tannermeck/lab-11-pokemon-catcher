const test = QUnit.test;

// name your test by what it is testing
test('when pokemon is selected, shown increases', (expect) => {
    const fakePokemon = {
        id: 1,
        shown: 1,
        preferred: 0
    };
    const expected = encounterPokemon(1);
    
    expect.deepequal(fakePokemon, expected);
});
