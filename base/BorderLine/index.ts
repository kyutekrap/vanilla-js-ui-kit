import { BorderLineProps } from "../../props/BorderLine";
import { BorderLineFactory } from "../../factory/BorderLine";

export abstract class BorderLineBase extends BorderLineFactory {

    _borderLine: HTMLDivElement;
    
    constructor(props: BorderLineProps) {
        super(props);
        this._borderLine = super.createBorderLine();
    }
}