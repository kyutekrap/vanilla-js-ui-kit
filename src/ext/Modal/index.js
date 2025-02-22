import { ModalBase } from "vanilla-js-ui-kit";
import { ModalProps } from "vanilla-js-ui-kit/props";

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