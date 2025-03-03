import { HBoxProps } from "../../props";
declare class Factory {
    _props: HBoxProps;
    constructor(props: HBoxProps);
    createHBox(): HTMLDivElement;
}
export declare abstract class HBoxBase extends Factory {
    _hBox: HTMLDivElement;
    constructor(props?: HBoxProps);
}
export {};
