export default class Game {
    constructor(wordsForCards: string[]) {
        const hasDuplicatedValues = () => new Set(wordsForCards).size !== wordsForCards.length;

        if(hasDuplicatedValues()) {
            throw new Error('All words must be unique.');
        }
    }
}