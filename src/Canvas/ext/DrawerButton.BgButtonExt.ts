import { BgButtonBase } from "../../../base";
import { BgButtonProps } from "../../../props";
import { openDrawer } from "../../../util";

export class DrawerButton extends BgButtonBase {
    constructor(props: BgButtonProps) {
        super(props);
        this._bgButton.addEventListener("click", () => this.onClick());
    }

    onClick() {
        openDrawer();
    }
}