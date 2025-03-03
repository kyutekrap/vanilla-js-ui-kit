export abstract class SpanBase {

    _span: HTMLSpanElement;

    constructor(text: string = "") {
        this._span = document.createElement("span");
        this._span.classList.add("span");
        this._span.innerHTML = text;
    }
}