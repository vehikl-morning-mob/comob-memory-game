import Card from "@/models/Card";

export default class Game {
    public cards: Card[] = [];

    constructor(wordsForCards: string[]) {
        const hasDuplicatedValues = () => new Set(wordsForCards).size !== wordsForCards.length;

        if(hasDuplicatedValues()) {
            throw new Error('All words must be unique.');
        }

        // Work
        // Pretty
        // Fast

        for (let word of wordsForCards) {
            this.cards.push(new Card(word));
            this.cards.push(new Card(word));
        }
    }
}