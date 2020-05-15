import Game from "../../src/models/Game";

describe('Game', () => {
    it('throws exception when non-unique word is passed', function () {
        const testListOfWords = ['cat', 'tree', 'cat', 'vase'];

        expect(()=> {
              new Game(testListOfWords);
        }).toThrow();
    });
})