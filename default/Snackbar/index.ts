import { SnackbarBase } from "../../base/Snackbar";
import { SnackbarProps } from "../../props/Snackbar";

export class SnackbarDefault extends SnackbarBase {
    constructor(props: SnackbarProps = {}) {
        super(props);
    }

    onClose() {
        super._onClose();
    }
}