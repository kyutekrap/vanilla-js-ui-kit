import { SelectBase } from "../../base";
import { SelectProps } from "../../props";

export class SelectDefault extends SelectBase {
    constructor(props: SelectProps) {
        super(props);
    }

    onChange() {
        super._onChange();
    }

    onFocus() {
        super._onFocus();
    }

    onFocusOut() {
        super._onFocusOut();
    }
}