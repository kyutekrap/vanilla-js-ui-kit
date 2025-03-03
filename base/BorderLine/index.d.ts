import { BorderLineProps } from "../../props";
declare class Factory {
    _props: BorderLineProps;
    constructor(props: BorderLineProps);
    createBorderLine(): HTMLDivElement;
}
export declare abstract class BorderLineBase extends Factory {
    _borderLine: HTMLDivElement;
    constructor(props: BorderLineProps);
}
export {};
