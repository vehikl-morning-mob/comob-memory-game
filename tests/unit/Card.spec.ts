import Card from "@/models/Card";

describe('Card', () => {
    let card: Card;

    beforeEach(() => {
        card = new Card();
    });

    it('is instantiated not flipped by default', () => {
        expect(card.isFlipped).toBe(false);
    });

    it('is flippable', () => {
        card.flip();

        expect(card.isFlipped).toBe(true);
    });
});