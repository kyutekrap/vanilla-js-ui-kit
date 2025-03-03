import { BorderLineProps } from "../../props/BorderLine";

export class BorderLineFactory {

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