import { BoxProps } from "../../props/Box";

export class BoxFactory {

    _props: BoxProps;

    constructor(props: BoxProps) {
        this._props = props;
    }

    createBox(): HTMLDivElement {
        const box = document.createElement("div");
        box.classList.add("box");
        if (this._props.border ?? false) {
            box.style.border = "1px solid var(--neutral-color)";
        }
        if (this._props.rounded ?? false) {
            box.style.borderRadius = "var(--border-radius)";
        }
        for (var i=0; i < this._props.children.length; i++) {
            box.appendChild(this._props.children[i]);
        }
        return box;
    }
}