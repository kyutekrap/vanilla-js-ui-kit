import { FlexBoxProps } from "../../props/FlexBox";

export class FlexBoxFactory {

    _props: FlexBoxProps;

    constructor(props: FlexBoxProps) {
        this._props = props;
    }

    createFlexBox(): HTMLDivElement {
        const flexBox = document.createElement("div");
        flexBox.classList.add("flexBox");
        if (this._props.alignSelf) flexBox.style.alignSelf = this._props.alignSelf;
        if (this._props.flexGrow) flexBox.style.flexGrow = this._props.flexGrow;
        if (this._props.children) {
            for (var i=0; i < this._props.children.length; i++) {
                flexBox.appendChild(this._props.children[i]);
            }
        }
        return flexBox;
    }
}