import { ButtonProps } from "../../props/Button";
import { ButtonFactory } from "../../factory/Button";
export declare abstract class ButtonBase extends ButtonFactory {
    _button: HTMLButtonElement;
    constructor(props: ButtonProps);
    abstract onClick(e: any): void;
    _onClick(e: any): void;
}
