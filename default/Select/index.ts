import { SelectBase } from "../../base/Select";
import { SelectProps } from "../../props/Select";

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