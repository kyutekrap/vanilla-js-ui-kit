import { SelectBase } from "../../../base/index.js";
import { SelectProps } from "../../../props/index.js";

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