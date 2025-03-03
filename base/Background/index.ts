import { BackgroundProps } from "../../props/Background";
import { BackgroundFactory } from "../../factory/Background";

export abstract class BackgroundBase extends BackgroundFactory {

    _background: HTMLDivElement;
    _badge: HTMLDivElement | undefined;

    constructor(props: BackgroundProps) {
        super(props);
        this._background = super.createBackground();
        this._badge = super.createBadge();
        if (this._badge) this._background.appendChild(this._badge);
    }

    abstract onClick(e: any): void;

    _onClick(e: any) {
        return;
    }
}