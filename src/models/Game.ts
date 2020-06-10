import Card from "@/models/Card";
import shuffle from 'shuffle-array';

export default class Game {
    public cards: Card[] = [];
    private cardsInteractedWith: Card[] = [];
    private static readonly INTERACTION_STACK_SIZE = 2;
    private isAllowingUserInput: boolean = true;

    constructor(numberOfPairs: number) {
        let wordsForCards: string[] = []
        for (let i = 1; i <= numberOfPairs ; i++) {
            wordsForCards.push(i.toString());
        }
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
        let currentCard = this.cards[index];
        if (currentCard.isFlipped || !this.isAllowingUserInput) {

            return;
        }
        currentCard.flip();
        this.cardsInteractedWith.unshift(currentCard);
        this.cardsInteractedWith.length = Game.INTERACTION_STACK_SIZE;
        if (this.isNumberOfFlippedCardsEven() && this.areTwoLastCardsDifferent()) {
            this.isAllowingUserInput = false;
            setTimeout(this.flipLastTwoCards.bind(this), 1000);
        }
    }

    private areTwoLastCardsDifferent() {
        return this.cardsInteractedWith[0].content !== this.cardsInteractedWith[1].content;
    }

    private flipLastTwoCards() {
        this.cardsInteractedWith[0].flip();
        this.cardsInteractedWith[1].flip();
        this.isAllowingUserInput = true;
    }

    private isNumberOfFlippedCardsEven() {
        const numberOfFlippedCards = this.cards.filter((card: Card) => card.isFlipped).length;
        return numberOfFlippedCards % 2 === 0;
    }

    get isOver() {
        return this.cards.every(card => card.isFlipped);
    }

    public restart() {
        shuffle(this.cards);
        for (const card of this.cards) {
            card.flip();
        }
    }
}