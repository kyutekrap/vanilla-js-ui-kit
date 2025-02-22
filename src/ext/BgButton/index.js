import { BgButtonBase } from "vanilla-js-ui-kit";
import { BgButtonProps } from "vanilla-js-ui-kit/props";
import { UI } from "vanilla-js-ui-kit/util";

export class BgButton extends BgButtonBase {
    constructor(props = new BgButtonProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }

    onClick() {
        UI.openDrawer();
    }
}