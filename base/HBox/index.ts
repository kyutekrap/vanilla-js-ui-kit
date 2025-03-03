import { HBoxProps } from "../../props/HBox";
import { HBoxFactory } from "../../factory/HBox";

export abstract class HBoxBase extends HBoxFactory {

    _hBox: HTMLDivElement;

    constructor(props: HBoxProps = { children: [] }) {
        super(props);
        this._hBox = super.createHBox();
    }
}