import { SelectBase } from "../../base/Select";
import { SelectProps } from "../../props/Select";

export class SelectDefault extends SelectBase {
    constructor(props: SelectProps) {
        super(props);
        this._input.addEventListener("change", (e) => this.onChange(e));
        this._input.addEventListener("focus", (e) => this.onFocus(e));
        this._input.addEventListener("blur", (e) => this.onFocusOut(e));
    }

    onChange(e: any) {
        super._onChange(e);
    }

    onFocus(e: any) {
        super._onFocus(e);
    }

    onFocusOut(e: any) {
        super._onFocusOut(e);
    }
}