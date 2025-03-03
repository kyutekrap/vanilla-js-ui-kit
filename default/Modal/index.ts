import { ModalBase } from "../../base";
import { ModalProps } from "../../props";

export class ModalDefault extends ModalBase {
    constructor(props: ModalProps = {}) {
        super(props);
    }

    onClose() {
        super._onClose();
    }
}