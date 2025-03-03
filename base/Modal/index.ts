import { ModalProps } from "../../props/Modal";
import { UI } from "../../util";
import { ModalFactory } from "../../factory/Modal";

export abstract class ModalBase extends ModalFactory {

    _modal: HTMLDivElement;
    _container: HTMLDivElement;
    _closeBtn: HTMLDivElement;
    _content: HTMLDivElement;

    constructor(props: ModalProps = {}) {
        super(props);
        this._modal = super.createModal();
        this._container = super.createContainer();
        this._closeBtn = super.createCloseBtn();
        this._container.appendChild(this._closeBtn);
        this._content = super.createContent();
        this._container.appendChild(this._content);
        this._modal.appendChild(this._container);
        document.body.appendChild(this._modal);
    }

    abstract onClose(e: any): void;

    _onClose(e: any) {
        e.preventDefault();
        UI.closeModal();
    }
}