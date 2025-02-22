import { ButtonProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createButton() {
        const button = document.createElement("button");
        button.classList.add("button");
        button.classList.add(this.parent.variant);
        button.classList.add(this.parent.size);
        button.innerHTML = this.parent.content;
        button.type = this.parent.type;
        button.style.width = this.parent.width;
        return button;
    }
}

export class ButtonBase extends Factory {

    _button = null;

    constructor(props = new ButtonProps()) {
        super({...new ButtonProps(), ...props})
    }

    initialize() {
        this._button = super.createButton();
    }

    onClick() {
        return;
    }
}