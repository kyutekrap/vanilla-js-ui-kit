import { VBoxProps } from "../../props/VBox";
import { VBoxFactory } from "../../factory/VBox";
export declare abstract class VBoxBase extends VBoxFactory {
    _vBox: HTMLDivElement;
    constructor(props?: VBoxProps);
}
