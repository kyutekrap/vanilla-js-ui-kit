import { HBoxProps } from "../../props/HBox";

export class HBoxFactory {

    _props: HBoxProps;

    constructor(props: HBoxProps) {
        this._props = props;
    }

    createHBox() {
        const hBox = document.createElement("div");
        hBox.classList.add("hBox");
        for (var i=0; i < this._props.children.length; i++) {
            hBox.appendChild(this._props.children[i]);
        }
        return hBox;
    }
}