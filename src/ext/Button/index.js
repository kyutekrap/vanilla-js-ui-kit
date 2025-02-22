import { ButtonBase } from "vanilla-js-ui-kit";
import { ButtonProps } from "vanilla-js-ui-kit/props";

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