import { SnackbarBase } from "../../base";
import { SnackbarProps } from "../../props";

export class SnackbarDefault extends SnackbarBase {
    constructor(props: SnackbarProps = {}) {
        super(props);
    }

    onClose() {
        super._onClose();
    }
}