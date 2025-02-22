import { SelectBase } from "vanilla-js-ui-kit";
import { SelectProps } from "vanilla-js-ui-kit/props";

export class Select extends SelectBase {
    constructor(props = new SelectProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }

    onChange() {
        super.onChange();
    }

    onFocus() {
        super.onFocus();
    }

    onFocusOut() {
        super.onFocusOut();
    }
}