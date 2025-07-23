import { BgButtonProps } from "../../props/BgButton";
import { BgButtonFactory } from "../../factory/BgButton";
import { BackgroundDefault, SmallDefault } from "../../default";

export abstract class BgButtonBase extends BgButtonFactory {

    _bgButton: HTMLDivElement;
    _background: HTMLDivElement;

    private _backgroundInst: BackgroundDefault;

    constructor(props: BgButtonProps) {
        super(props);
        this._bgButton = super.createBgButton();
        this._backgroundInst = super.createBackground();
        this._background = this._backgroundInst._background;
        this._bgButton.appendChild(this._background);
    }

    abstract onClick(e: any): void;
    abstract updateBadge(badge: string): void;

    _onClick(e: any): void {
        return;
    }

    _updateBadge(badge: string): void {
        this._props.badge = badge;
        const badgeContent = new SmallDefault(this._props.badge);
        if (this._backgroundInst._badge) this._backgroundInst._badge.replaceChildren(badgeContent._small);
    }
}