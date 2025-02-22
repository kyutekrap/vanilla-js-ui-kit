import { ButtonBase } from "../../../base/index.js";
import { ButtonProps } from "../../../props/index.js";

export class Button extends ButtonBase {
    constructor(props = new ButtonProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }

    onClick() {
        super.onClick();
    }
}