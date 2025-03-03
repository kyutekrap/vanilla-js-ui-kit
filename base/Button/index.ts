import { ButtonProps } from "../../props";

class Factory {

    _props: ButtonProps;

    constructor(props: ButtonProps) {
        this._props = props;
    }

    createButton(): HTMLButtonElement {
        const button = document.createElement("button");
        button.classList.add("button");
        button.classList.add(this._props.variant);
        button.classList.add(this._props.size);
        button.innerHTML = this._props.content;
        button.type = this._props.type;
        button.style.width = this._props.width;
        return button;
    }
}

export abstract class ButtonBase extends Factory {

    _button: HTMLButtonElement;

    constructor(props: ButtonProps) {
        super(props);
        this._button = super.createButton();
    }

    abstract onClick(): void;

    _onClick() {
        return;
    }
}