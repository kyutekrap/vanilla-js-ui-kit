import { SnackbarBase } from "../../../base/index.js";
import { SnackbarProps } from "../../../props/index.js";

export class Snackbar extends SnackbarBase {
    constructor(props = new SnackbarProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }

    onClose() {
        super.onClose();
    }
}