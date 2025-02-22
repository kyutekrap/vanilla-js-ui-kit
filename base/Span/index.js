export class SpanBase {

    _span;

    constructor(text = "") {
        this.text = text;
    }

    initialize() {
        this._span = document.createElement("span");
        this._span.classList.add("span");
        this._span.innerHTML = this.text;
    }
}