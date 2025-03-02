import { InputBase as Input } from "../Input";
import { FileInputProps } from "../../props";
import { UIException } from "../../exception";

class Factory {

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
        const fileInput = new Input({ variant: "file", name: this._props.name, required: this._props.required });
        fileInput._input.style.display = "none";
        fileInput._input.accept = this._props.accept;
        return fileInput._input;
    }
}

export class FileInputBase extends Factory {

    _textInput: HTMLInputElement;
    _fileInput: HTMLInputElement;
    _editable: boolean;
    _size: number;
    _multiselect: boolean;

    constructor(props: FileInputProps) {
        super(props);
        this._textInput = super.createTextInput();
        this._fileInput = super.createFileInput();
        this._editable = props.editable;
        this._size = props.size;
        this._multiselect = props.multiselect;
    }

    onClick() {
        this._fileInput.addEventListener("click", (e) => {
            if (this._editable) this._fileInput.click();
        });
    }

    onChange() {
        this._fileInput.addEventListener("change", (e) => {
            const files: File[] = this._multiselect && this._fileInput.files
                ? Array.from(this._fileInput.files)
                : this._fileInput.files
                ? [this._fileInput.files[0]]
                : [];
            this._textInput.value = files.map(file => {
                if (file.size > this._size * 1024 * 1024) {
                    throw UIException.FILE_TOO_BIG;
                } else {
                    return file.name;
                }
            }).join(",");
        });
    }
}