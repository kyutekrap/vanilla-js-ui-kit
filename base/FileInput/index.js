import { InputBase as Input } from "../Input/index.js";
import { FileInputProps } from "../../props/index.js";
import { UIException } from "../../exception/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createTextInput() {
        const textInput = document.createElement("input");
        textInput.classList.add("input");
        textInput.readOnly = true;
        textInput.value = this.parent.value;
        textInput.placeholder = this.parent.placeholder;
        textInput.style.width = this.parent.width;
        return textInput;
    }

    createFileInput() {
        const fileInput = new Input({ variant: "file", name: this.parent.name, required: this.parent.required });
        fileInput.initialize();
        fileInput._input.style.display = "none";
        fileInput._input.accept = this.parent.accept;
        return fileInput._input;
    }
}

export class FileInputBase extends Factory {

    _textInput;
    _fileInput;

    constructor(props = new FileInputProps()) {
        super({...new FileInputProps(), ...props})
    }

    initialize() {
        this._textInput = super.createTextInput();
        this._fileInput = super.createFileInput();
    }

    onClick() {
        this._fileInput.addEventListener("click", (e) => {
            if (super.parent.editable) this._fileInput.click();
        });
    }

    onChange() {
        this._fileInput.addEventListener("change", (e) => {
            const files = Array.from(super.parent.multiselect ? this._fileInput.files : this._fileInput.files[0]);
            this._textInput.value = files.map(file => {
                if (file.size > super.parent.size * 1024 * 1024) {
                    throw UIException.FILE_TOO_BIG;
                } else {
                    return file.name;
                }
            }).join(",");
        });
    }
}