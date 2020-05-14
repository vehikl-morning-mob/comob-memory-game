export default class Card {
    private _isFlipped : boolean = false;
    public get isFlipped(): boolean {
        return this._isFlipped;
    }

    public flip() {
        this._isFlipped = !this._isFlipped;
    }
}