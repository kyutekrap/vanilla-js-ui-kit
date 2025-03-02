import { BorderLineProps } from "../../props";

class Factory {

    _props: BorderLineProps;

    constructor(props: BorderLineProps) {
        this._props = props;
    }

    createBorderLine(): HTMLDivElement {
        const borderLine = document.createElement("div");
        borderLine.classList.add("borderLine");
        for (var i=0; i < this._props.children.length; i++) {
            borderLine.appendChild(this._props.children[i]);
        }
        return borderLine;
    }
}

export class BorderLineBase extends Factory {

    _borderLine: HTMLDivElement;
    
    constructor(props: BorderLineProps) {
        super(props);
        this._borderLine = super.createBorderLine();
    }
}