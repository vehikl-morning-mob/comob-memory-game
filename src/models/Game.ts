import Card from "@/models/Card";
import shuffle from 'shuffle-array';

export default class Game {
    public cards: Card[] = [];
    private lastFlippedCard: Card | null = null;

    constructor(wordsForCards: string[]) {
        const hasDuplicatedValues = () => new Set(wordsForCards).size !== wordsForCards.length;

        if (hasDuplicatedValues()) {
            throw new Error('All words must be unique.');
        }

        for (let word of wordsForCards) {
            this.cards.push(new Card(word));
            this.cards.push(new Card(word));
        }

        shuffle(this.cards);
    }

    public interactWithCard(index: number) {
        const incomingCard = this.cards[index];
        incomingCard.flip();
        if (this.isNumberOfFlippedCardsEven()) {
            if (this.lastFlippedCard?.content !== incomingCard.content) {
                setTimeout((that: any, incomingCard: any) => {
                    that.lastFlippedCard.flip();
                    incomingCard.flip();
                    this.lastFlippedCard = null;
                }, 1000, this, incomingCard);
            } else {
                this.lastFlippedCard = null;
            }
        } else {
            this.lastFlippedCard = incomingCard;
        }
    }

    private isNumberOfFlippedCardsEven() {
        const numberOfFlippedCards = this.cards.filter((card: Card) => card.isFlipped).length;
        return numberOfFlippedCards % 2 === 0;
    }
}