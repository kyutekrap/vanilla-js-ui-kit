import { TextareaProps } from "../../props";
declare class Factory {
    _props: TextareaProps;
    constructor(props: TextareaProps);
    createTextarea(): HTMLTextAreaElement;
}
export declare abstract class TextareaBase extends Factory {
    _textarea: HTMLTextAreaElement;
    constructor(props: TextareaProps);
}
export {};
