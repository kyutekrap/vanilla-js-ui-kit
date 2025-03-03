import { VBoxProps } from "../../props";

class Factory {

    _props: VBoxProps;

    constructor(props: VBoxProps) {
        this._props = props;
    }

    createVBox(): HTMLDivElement {
        const vBox = document.createElement("div");
        vBox.classList.add("vBox");
        for (var i=0; i < this._props.children.length; i++) {
            vBox.appendChild(this._props.children[i]);
        }
        return vBox;
    }
}

export abstract class VBoxBase extends Factory {

    _vBox: HTMLDivElement;

    constructor(props: VBoxProps = { children: [] }) {
        super(props);
        this._vBox = super.createVBox();
    }
}