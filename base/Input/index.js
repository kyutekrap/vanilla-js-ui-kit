import { InputProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createInput() {
        const input = document.createElement("input");
        input.classList.add("input");
        input.value = this.parent.value;
        input.placeholder = this.parent.placeholder;
        input.readOnly = !this.parent.editable;
        input.type = this.parent.variant;
        input.style.width = this.parent.width;
        input.name = this.parent.name;
        input.required = this.parent.required;
        return input;
    }
}

export class InputBase extends Factory {

    _input;

    constructor(props = new InputProps()) {
        super({...new InputProps(), ...props})
    }

    initialize() {
        this._input = super.createInput();
    }
}