import { BgButtonBase } from "../../../base/index.js";
import { BgButtonProps } from "../../../props/index.js";
import { UI } from "../../../util/index.js";

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