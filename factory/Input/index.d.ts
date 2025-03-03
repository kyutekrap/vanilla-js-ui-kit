import { InputProps } from "../../props/Input";
export declare class InputFactory {
    _props: InputProps;
    constructor(props: InputProps);
    createInput(): HTMLInputElement;
}
