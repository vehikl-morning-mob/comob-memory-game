export default class Card {
    private _isFlipped: boolean = false;
    private _content: string = "";

    constructor(content: string) {
        this._content = content;
    }

    public get isFlipped(): boolean {
        return this._isFlipped;
    }

    public get content(): string {
        return this.isFlipped ? this._content : '';
    }

    public flip() {
        this._isFlipped = !this._isFlipped;
    }
}