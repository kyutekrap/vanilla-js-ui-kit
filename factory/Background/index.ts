import { BackgroundProps } from "../../props/Background";
import { SmallDefault } from "../../default/Small";

export class BackgroundFactory {

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
            const badgeContent = new SmallDefault(this._props.badge);
            badgeContainer.appendChild(badgeContent._small);
            badgeContainer.classList.add("badge");
            return badgeContainer;
        }
    }
}