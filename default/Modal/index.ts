import { ModalBase } from "../../base/Modal";
import { ModalProps } from "../../props/Modal";

export class ModalDefault extends ModalBase {
    constructor(props: ModalProps = {}) {
        super(props);
        this._closeBtn.addEventListener("click", (e) => this.onClose(e));
    }

    onClose(e: any) {
        super._onClose(e);
    }
}