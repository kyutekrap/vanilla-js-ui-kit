import { FlexBoxProps } from "../../props/FlexBox";
import { FlexBoxFactory } from "../../factory/FlexBox";

export abstract class FlexBoxBase extends FlexBoxFactory {
    
    _flexBox: HTMLDivElement;

    constructor(props: FlexBoxProps) {
        super(props);
        this._flexBox = super.createFlexBox();
    }
}