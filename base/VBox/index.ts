import { VBoxProps } from "../../props/VBox";
import { VBoxFactory } from "../../factory/VBox";

export abstract class VBoxBase extends VBoxFactory {

    _vBox: HTMLDivElement;

    constructor(props: VBoxProps = { children: [] }) {
        super(props);
        this._vBox = super.createVBox();
    }
}