import { VBoxProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createVBox() {
        const vBox = document.createElement("div");
        vBox.classList.add("vBox");
        for (var i=0; i < this.parent.children.length; i++) {
            vBox.appendChild(this.parent.children[i]);
        }
        return vBox;
    }
}

export class VBoxBase extends Factory {

    _vBox;

    constructor(props = new VBoxProps()) {
        super({...new VBoxProps(), ...props})
    }

    initialize() {
        this._vBox = super.createVBox();
    }
}