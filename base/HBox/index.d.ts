import { HBoxProps } from "../../props/HBox";
import { HBoxFactory } from "../../factory/HBox";
export declare abstract class HBoxBase extends HBoxFactory {
    _hBox: HTMLDivElement;
    constructor(props?: HBoxProps);
}
