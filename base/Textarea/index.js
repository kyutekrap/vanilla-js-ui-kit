import { TextareaProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createTextarea() {
        const textarea = document.createElement("textarea");
        textarea.classList.add("textarea");
        textarea.readOnly = !this.parent.editable;
        textarea.placeholder = this.parent.placeholder;
        textarea.value = this.parent.value;
        textarea.rows = this.parent.lines;
        textarea.style.width = this.parent.width;
        textarea.style.resize = this.parent.resize;
        return textarea;
    }
}

export class TextareaBase extends Factory {

    _textarea;

    constructor(props = new TextareaProps()) {
        super({...new TextareaProps(), ...props})
    }

    initialize() {
        this._textarea = super.createTextarea();
    }
}