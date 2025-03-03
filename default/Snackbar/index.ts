import { SnackbarBase } from "../../base/Snackbar";
import { SnackbarProps } from "../../props/Snackbar";

export class SnackbarDefault extends SnackbarBase {
    constructor(props: SnackbarProps = {}) {
        super(props);
        this._closeBtn.addEventListener("click", (e) => this.onClose(e));
    }

    onClose(e: any) {
        super._onClose(e);
    }
}