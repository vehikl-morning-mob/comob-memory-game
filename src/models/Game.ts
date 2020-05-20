import Card from "@/models/Card";
import shuffle from 'shuffle-array';

export default class Game {
    public cards: Card[] = [];

    constructor(wordsForCards: string[]) {
        const hasDuplicatedValues = () => new Set(wordsForCards).size !== wordsForCards.length;

        if(hasDuplicatedValues()) {
            throw new Error('All words must be unique.');
        }

        for (let word of wordsForCards) {
            this.cards.push(new Card(word));
            this.cards.push(new Card(word));
        }

        shuffle(this.cards);
    }

    public interactWithCard(index :number){
        this.cards[index].flip();
    }
}