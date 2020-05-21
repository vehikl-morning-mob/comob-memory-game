import Card from "@/models/Card";
import shuffle from 'shuffle-array';

export default class Game {
    public cards: Card[] = [];
    private lastFlippedCard: Card = new Card('');

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

    // 1 0 0
    // 0 1 0

    public interactWithCard(index :number) {
        // flip the incoming card
        // if there is an even number of cards visible:
        //      if the last card content is the same as the incoming content
        //          do nothing
        //      else
        //          wait for a second
        //          flip both cards back
        // else
        //      do nothing
        const incomingCard = this.cards[index];
        incomingCard.flip();
        if (this.isNumberOfFlippedCardsEven()) {
            if (this.lastFlippedCard.content !== incomingCard.content) {
                // TODO: wait for a second
                this.lastFlippedCard.flip();
                incomingCard.flip();
            }
        }
        this.lastFlippedCard = incomingCard
    }

    private isNumberOfFlippedCardsEven() {
        const numberOfFlippedCards = this.cards.filter((card: Card) => card.isFlipped).length;
        return numberOfFlippedCards % 2 === 0;
    }
}