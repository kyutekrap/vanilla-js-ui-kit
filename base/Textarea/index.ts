import { TextareaProps } from "../../props";

class Factory {

    _props: TextareaProps;

    constructor(props: TextareaProps) {
        this._props = props;
    }

    createTextarea(): HTMLTextAreaElement {
        const textarea = document.createElement("textarea");
        textarea.classList.add("textarea");
        textarea.readOnly = !this._props.editable;
        textarea.placeholder = this._props.placeholder;
        textarea.value = this._props.value;
        textarea.rows = this._props.lines;
        textarea.style.width = this._props.width;
        textarea.style.resize = this._props.resize;
        return textarea;
    }
}

export class TextareaBase extends Factory {

    _textarea: HTMLTextAreaElement;

    constructor(props: TextareaProps) {
        super(props);
        this._textarea = super.createTextarea();
    }
}