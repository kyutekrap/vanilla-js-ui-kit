import { ButtonProps } from "../../props/Button";
import { ButtonFactory } from "../../factory/Button";

export abstract class ButtonBase extends ButtonFactory {

    _button: HTMLButtonElement;

    constructor(props: ButtonProps) {
        super(props);
        this._button = super.createButton();
    }

    abstract onClick(e: any): void;

    _onClick(e: any) {
        return;
    }
}