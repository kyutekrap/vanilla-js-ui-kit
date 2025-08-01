import { TextareaProps } from "../../props/Textarea";

export class TextareaFactory {

    _props: TextareaProps;

    constructor(props: TextareaProps) {
        this._props = props;
    }

    createTextarea(): HTMLTextAreaElement {
        const textarea = document.createElement("textarea");
        textarea.classList.add("textarea");
        textarea.readOnly = !this._props.editable;
        textarea.placeholder = this._props.placeholder ?? "";
        textarea.value = this._props.value ?? "";
        textarea.rows = this._props.lines;
        textarea.style.width = this._props.width ?? "100%";
        textarea.style.resize = this._props.resize;
        textarea.required = this._props.required ?? false;
        textarea.name = this._props.name ?? "";
        return textarea;
    }
}