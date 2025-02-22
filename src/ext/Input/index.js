import { InputBase } from "vanilla-js-ui-kit";
import { InputProps } from "vanilla-js-ui-kit/props";

export class Input extends InputBase {
    constructor(props = new InputProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }
}