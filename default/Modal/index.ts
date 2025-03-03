import { ModalBase } from "../../base/Modal";
import { ModalProps } from "../../props/Modal";

export class ModalDefault extends ModalBase {
    constructor(props: ModalProps = {}) {
        super(props);
    }

    onClose() {
        super._onClose();
    }
}