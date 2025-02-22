import { BorderLineProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createBorderLine() {
        const borderLine = document.createElement("div");
        borderLine.classList.add("borderLine");
        for (var i=0; i < this.parent.children.length; i++) {
            this._borderLine.appendChild(this.parent.children[i]);
        }
        return borderLine;
    }
}

export class BorderLineBase extends Factory {

    _borderLine;
    
    constructor(props = new BorderLineProps()) {
        super({...new BorderLineProps(), ...props})
    }

    initialize() {
        this._borderLine = super.createBorderLine();
    }
}