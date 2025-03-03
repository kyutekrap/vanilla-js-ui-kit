import { FlexBoxProps } from "../../props/FlexBox";
import { FlexBoxFactory } from "../../factory/FlexBox";
export declare abstract class FlexBoxBase extends FlexBoxFactory {
    _flexBox: HTMLDivElement;
    constructor(props: FlexBoxProps);
}
