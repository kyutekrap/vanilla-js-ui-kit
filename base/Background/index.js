import { SmallBase as Small } from "../Small/index.js";
import { BackgroundProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createBackground() {
        const background = document.createElement("div");
        background.classList.add("background");
        background.style.width = this.parent.width;
        background.style.height = this.parent.height;
        background.style.backgroundImage = `url(${this.parent.src})`;
        return background;
    }

    createBadge() {
        if (this.parent.badge) {
            const badgeContainer = document.createElement("div");
            const badgeContent = new Small(this.parent.badge);
            badgeContent.initialize();
            badgeContainer.appendChild(badgeContent._small);
            badgeContainer.classList.add("badge");
            return badgeContainer;
        }
    }
}

export class BackgroundBase extends Factory {

    _background;
    _badge;

    constructor(props = new BackgroundProps()) {
        super({...new BackgroundProps(), ...props})
    }

    initialize() {
        this._background = super.createBackground();

        this._badge = super.createBadge();
        if (this._badge) this._background.appendChild(this._badge);
    }

    onClick() {
        return;
    }
}