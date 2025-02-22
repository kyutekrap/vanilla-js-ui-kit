import { SnackbarBase } from "vanilla-js-ui-kit";
import { SnackbarProps } from "vanilla-js-ui-kit/props";

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