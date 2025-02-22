import { FooterProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createFooter() {
        const footer = document.createElement("div");
        footer.classList.add("footer");
        for (var i=0; i < this.parent.children.length; i++) {
            footer.appendChild(this.parent.children[i]);
        }
        return footer;
    }
}

export class FooterBase extends Factory {

    _footer;

    constructor(props = new FooterProps()) {
        super({...new FooterProps(), ...props})
    }

    initialize() {
        this._footer = super.createFooter();
        document.body.appendChild(this._footer);
    }
}