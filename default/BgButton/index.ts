import { BgButtonBase } from "../../base/BgButton";
import { BgButtonProps } from "../../props/BgButton";

export class BgButtonDefault extends BgButtonBase {
    constructor(props: BgButtonProps) {
        super(props);
        this._bgButton.addEventListener("click", (e) => this.onClick(e));
    }

    onClick(e: any) {
        super._onClick(e);
    }
}