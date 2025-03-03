import { InputProps } from "../../props/Input";
import { InputFactory } from "../../factory/Input";
export declare abstract class InputBase extends InputFactory {
    _input: HTMLInputElement;
    constructor(props?: InputProps);
}
