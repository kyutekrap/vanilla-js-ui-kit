import { FileInputProps } from "../../props/FileInput";
import { InputDefault } from "../../default/Input";

export class FileInputFactory {

    _props: FileInputProps;

    constructor(props: FileInputProps) {
        this._props = props;
    }

    createTextInput(): HTMLInputElement {
        const textInput = document.createElement("input");
        textInput.classList.add("input");
        textInput.readOnly = true;
        textInput.value = this._props.value;
        textInput.placeholder = this._props.placeholder;
        textInput.style.width = this._props.width;
        return textInput;
    }

    createFileInput(): HTMLInputElement {
        const fileInput = new InputDefault({ variant: "file", name: this._props.name, required: this._props.required });
        fileInput._input.style.display = "none";
        fileInput._input.accept = this._props.accept;
        return fileInput._input;
    }
}