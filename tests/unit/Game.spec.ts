import Game from "../../src/models/Game";
import Card from "@/models/Card";

describe('Game', () => {
    it('throws exception when non-unique word is passed', () => {
        const testListOfWords = ['cat', 'tree', 'cat', 'vase'];

        expect(() => {
            new Game(testListOfWords);
        }).toThrow();
    });

    it('creates 2 cards per word that is passed to the constructor', () => {
        const testListOfWords = ['cat', 'tree', 'vase'];
        const game = new Game(testListOfWords)
        game.cards.forEach(card => card.flip());

        for (const word of testListOfWords) {
            expect(game.cards.filter(card => card.visibleContent === word)).toHaveLength(2);
        }
    });

    describe('player interaction', function () {
        it('flips the card on interaction', function () {
            const testListOfWords = ['cat', 'tree', 'vase'];
            const game = new Game(testListOfWords)

            game.cards.forEach((card: Card, cardIndex: number) => {
                game.interactWithCard(cardIndex);
                expect(card.isFlipped).toBeTruthy();
            })
        });

        // TODO: split this test into 2
        it('flips two cards and they are unflipped after 1 second', () => {
            const testListOfWords = ['cat', 'tree', 'vase'];
            const game = new Game(testListOfWords)

            game.interactWithCard(0);
            game.interactWithCard(1);
            // TODO: wait for a second
            game.cards.forEach((card: Card, cardIndex: number) => {
                expect(card.isFlipped).toBeFalsy();
            })
        })
    });
})