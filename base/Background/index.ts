import { SmallBase as Small } from "../Small";
import { BackgroundProps } from "../../props";

class Factory {

    _props: BackgroundProps;

    constructor(props: BackgroundProps) {
        this._props = props;
    }

    createBackground(): HTMLDivElement {
        const background = document.createElement("div");
        background.classList.add("background");
        background.style.width = this._props.width;
        background.style.height = this._props.height;
        background.style.backgroundImage = `url(${this._props.src})`;
        return background;
    }

    createBadge(): HTMLDivElement | undefined {
        if (this._props.badge) {
            const badgeContainer = document.createElement("div");
            const badgeContent = new Small(this._props.badge);
            badgeContainer.appendChild(badgeContent._small);
            badgeContainer.classList.add("badge");
            return badgeContainer;
        }
    }
}

export class BackgroundBase extends Factory {

    _background: HTMLDivElement;
    _badge: HTMLDivElement | undefined;

    constructor(props: BackgroundProps) {
        super(props);
        this._background = super.createBackground();
        this._badge = super.createBadge();
        if (this._badge) this._background.appendChild(this._badge);
    }

    onClick() {
        return;
    }
}