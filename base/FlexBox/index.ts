import { FlexBoxProps } from "../../props";

class Factory {

    _props: FlexBoxProps;

    constructor(props: FlexBoxProps) {
        this._props = props;
    }

    createFlexBox(): HTMLDivElement {
        const flexBox = document.createElement("div");
        flexBox.classList.add("flexBox");
        flexBox.style.alignSelf = this._props.alignSelf;
        flexBox.style.flexGrow = this._props.flexGrow;
        for (var i=0; i < this._props.children.length; i++) {
            flexBox.appendChild(this._props.children[i]);
        }
        return flexBox;
    }
}

export class FlexBoxBase extends Factory {
    
    _flexBox: HTMLDivElement;

    constructor(props: FlexBoxProps) {
        super(props);
        this._flexBox = super.createFlexBox();
    }
}