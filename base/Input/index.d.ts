import { InputProps } from "../../props";
declare class Factory {
    _props: InputProps;
    constructor(props: InputProps);
    createInput(): HTMLInputElement;
}
export declare abstract class InputBase extends Factory {
    _input: HTMLInputElement;
    constructor(props?: InputProps);
}
export {};
