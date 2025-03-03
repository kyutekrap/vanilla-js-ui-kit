import { HBoxProps } from "../../props";

class Factory {

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

export abstract class HBoxBase extends Factory {

    _hBox: HTMLDivElement;

    constructor(props: HBoxProps = { children: [] }) {
        super(props);
        this._hBox = super.createHBox();
    }
}