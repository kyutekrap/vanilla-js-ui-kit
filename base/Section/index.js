import { VBoxBase as VBox } from "../VBox/index.js";
import { SectionProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createSection() {
        const section = new VBox();
        section.initialize();
        section._vBox.classList.add("section");
        for (var i=0; i < this.parent.children.length; i++) {
            section._vBox.appendChild(this.parent.children[i]);
        }
        return section._vBox;
    }
}

export class SectionBase extends Factory {

    _section;

    constructor(props = new SectionProps()) {
        super({...new SectionProps(), ...props})
    }

    initialize() {
        this._section = super.createSection();
        document.body.appendChild(this._section);
    }
}