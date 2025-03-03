import { InputProps } from "../../props";

class Factory {

    _props: InputProps;

    constructor(props: InputProps) {
        this._props = props;
    }

    createInput(): HTMLInputElement {
        const input = document.createElement("input");
        input.classList.add("input");
        input.value = this._props.value ?? "";
        input.placeholder = this._props.placeholder ?? "";
        input.readOnly = !(this._props.editable ?? true);
        input.type = this._props.variant ?? "text";
        input.style.width = this._props.width ?? "100%";
        input.name = this._props.name ?? "";
        input.required = this._props.required ?? false;
        return input;
    }
}

export abstract class InputBase extends Factory {

    _input: HTMLInputElement;

    constructor(props: InputProps = {}) {
        super(props);
        this._input = super.createInput();
    }
}