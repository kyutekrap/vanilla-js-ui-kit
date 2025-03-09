import { BgButtonBase } from "vanilla-js-ui-kit";
import { BgButtonProps } from "vanilla-js-ui-kit/props";
import { UI } from "vanilla-js-ui-kit/util";

export class DrawerButton extends BgButtonBase {
    constructor(props: BgButtonProps) {
        super(props);
        this._bgButton.addEventListener("click", () => this.onClick());
    }

    onClick() {
        UI.openDrawer();
    }
}