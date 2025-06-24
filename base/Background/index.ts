import { BackgroundProps } from "../../props/Background";
import { BackgroundFactory } from "../../factory/Background";

export abstract class BackgroundBase extends BackgroundFactory {

    _background: HTMLDivElement;
    _badge: HTMLDivElement | undefined;

    constructor(props: BackgroundProps) {
        super(props);
        this._background = super.createBackground();
        if (props.badge) {
            this._badge = super.createBadge() as HTMLDivElement;
            this._background.appendChild(this._badge);
        }
    }

    abstract onClick(e: any): void;

    _onClick(e: any) {
        return;
    }
}