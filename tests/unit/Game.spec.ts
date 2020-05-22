import Game from "../../src/models/Game";
import Card from "@/models/Card";
jest.useFakeTimers();

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

            game.interactWithCard(0);
            expect(game.cards[0].isFlipped).toBeTruthy();
        });

        it('flips two cards with same content and they stay flipped', () => {
            const testListOfWords = ['cat', 'tree', 'vase'];
            const game = new Game(testListOfWords)

            game.interactWithCard(0);
            let cardsSelected = [game.cards[0]];
            for (let i = 1; i < game.cards.length; i++) {
                if (game.cards[i].content === game.cards[0].content) {
                    game.interactWithCard(i);
                    cardsSelected.push(game.cards[i]);
                }
            }

            jest.advanceTimersByTime(1000);

            cardsSelected.forEach((card: Card, cardIndex: number) => {
                expect(card.isFlipped).toBeTruthy();
            })
        })

        it('flips two cards with different content and they are flipped back', () => {
            const testListOfWords = ['cat', 'tree', 'vase'];
            const game = new Game(testListOfWords)

            game.interactWithCard(0);
            let cardsSelected = [game.cards[0]];
            for (let i = 1; i < game.cards.length; i++) {
                if (game.cards[i].content !== game.cards[0].content) {
                    game.interactWithCard(i);
                    cardsSelected.push(game.cards[i]);
                    break;
                }
            }

            jest.advanceTimersByTime(1000);

            cardsSelected.forEach((card: Card, cardIndex: number) => {
                expect(card.isFlipped).toBeFalsy();
            })
        })
    });
})