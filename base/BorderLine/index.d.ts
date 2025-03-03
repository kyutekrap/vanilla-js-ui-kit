import { BorderLineProps } from "../../props/BorderLine";
import { BorderLineFactory } from "../../factory/BorderLine";
export declare abstract class BorderLineBase extends BorderLineFactory {
    _borderLine: HTMLDivElement;
    constructor(props: BorderLineProps);
}
