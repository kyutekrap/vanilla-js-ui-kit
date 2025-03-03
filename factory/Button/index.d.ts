import { ButtonProps } from "../../props";
declare class Factory {
    _props: ButtonProps;
    constructor(props: ButtonProps);
    createButton(): HTMLButtonElement;
}
export declare abstract class ButtonBase extends Factory {
    _button: HTMLButtonElement;
    constructor(props: ButtonProps);
    abstract onClick(): void;
    _onClick(): void;
}
export {};
