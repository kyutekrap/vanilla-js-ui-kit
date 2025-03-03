import { ButtonProps } from "../../props/Button";
export declare class ButtonFactory {
    _props: ButtonProps;
    constructor(props: ButtonProps);
    createButton(): HTMLButtonElement;
}
