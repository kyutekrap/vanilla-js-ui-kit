import { BgButtonProps } from "../../props/BgButton";
import { BgButtonFactory } from "../../factory/BgButton";

export abstract class BgButtonBase extends BgButtonFactory {

    _bgButton: HTMLDivElement;
    _background: HTMLDivElement;

    constructor(props: BgButtonProps) {
        super(props);
        this._bgButton = super.createBgButton();
        this._background = super.createBackground();
        this._bgButton.appendChild(this._background);
    }

    abstract onClick(e: any): void;

    _onClick(e: any) {
        return;
    }
}