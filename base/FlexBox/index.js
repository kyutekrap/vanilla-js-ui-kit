import { FlexBoxProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createFlexBox() {
        const flexBox = document.createElement("div");
        flexBox.classList.add("flexBox");
        flexBox.style.alignSelf = this.parent.alignSelf;
        flexBox.style.flexGrow = this.parent.flexGrow;
        for (var i=0; i < this.parent.children.length; i++) {
            flexBox.appendChild(this.parent.children[i]);
        }
        return flexBox;
    }
}

export class FlexBoxBase extends Factory {
    
    _flexBox;

    constructor(props = new FlexBoxProps()) {
        super({...new FlexBoxProps(), ...props})
    }

    initialize() {
        this._flexBox = super.createFlexBox();
    }
}