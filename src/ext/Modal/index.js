import { ModalBase } from "../../../base/index.js";
import { ModalProps } from "../../../props/index.js";

export class Modal extends ModalBase {
    constructor(props = new ModalProps()) {
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