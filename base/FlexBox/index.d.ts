import { FlexBoxProps } from "../../props";
declare class Factory {
    _props: FlexBoxProps;
    constructor(props: FlexBoxProps);
    createFlexBox(): HTMLDivElement;
}
export declare abstract class FlexBoxBase extends Factory {
    _flexBox: HTMLDivElement;
    constructor(props: FlexBoxProps);
}
export {};
