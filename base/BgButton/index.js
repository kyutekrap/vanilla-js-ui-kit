import { BackgroundBase as Background } from "../Background/index.js";
import { BgButtonProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createBgButton() {
        const bgButton = document.createElement("div");
        bgButton.classList.add("bgButton");
        if (this.parent.rounded) {
            bgButton.classList.add("rounded");
        }
        bgButton.style.width = this.parent.width;
        bgButton.style.height = this.parent.height;
        return bgButton;
    }

    createBackground() {
        const bg = new Background({
            width: this.parent.width,
            height: this.parent.height,
            src: this.parent.src
        });
        bg.initialize();
        return bg._background;
    }
}

export class BgButtonBase extends Factory {

    _bgButton = null;
    _background = null;

    constructor(props = new BgButtonProps()) {
        super({...new BgButtonProps(), ...props});
    }

    initialize() {
        this._bgButton = super.createBgButton();
        this._background = super.createBackground();
        this._bgButton.appendChild(this._background);
    }

    onClick() {
        return;
    }
}