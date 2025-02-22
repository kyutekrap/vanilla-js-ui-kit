import { HBoxProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createHBox() {
        const hBox = document.createElement("div");
        hBox.classList.add("hBox");
        for (var i=0; i < this.parent.children.length; i++) {
            hBox.appendChild(this.parent.children[i]);
        }
        return hBox;
    }
}

export class HBoxBase extends Factory {

    _hBox;

    constructor(props = new HBoxProps()) {
        super({...new HBoxProps(), ...props});
    }

    initialize() {
        this._hBox = super.createHBox();
    }
}