import { BgButtonProps } from "../../props/BgButton";
import { BackgroundDefault } from "../../default/Background";

export class BgButtonFactory {

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
        const bg = new BackgroundDefault({
            width: this._props.width,
            height: this._props.height,
            src: this._props.src,
            badge: this._props.badge
        });
        return bg._background;
    }
}