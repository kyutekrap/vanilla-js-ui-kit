import { BackgroundBase as Background } from "../Background";
import { BgButtonProps } from "../../props";

class Factory {

    _props: BgButtonProps;

    constructor(props: BgButtonProps) {
        this._props = props;
    }

    createBgButton(): HTMLDivElement {
        const bgButton = document.createElement("div");
        bgButton.classList.add("bgButton");
        if (this._props.rounded) {
            bgButton.classList.add("rounded");
        }
        bgButton.style.width = this._props.width;
        bgButton.style.height = this._props.height;
        return bgButton;
    }

    createBackground(): HTMLDivElement {
        const bg = new Background({
            width: this._props.width,
            height: this._props.height,
            src: this._props.src
        });
        return bg._background;
    }
}

export class BgButtonBase extends Factory {

    _bgButton: HTMLDivElement;
    _background: HTMLDivElement;

    constructor(props: BgButtonProps) {
        super(props);
        this._bgButton = super.createBgButton();
        this._background = super.createBackground();
        this._bgButton.appendChild(this._background);
    }

    onClick() {
        return;
    }
}