import { ModalProps } from "../../props/Modal";
import { ModalFactory } from "../../factory/Modal";
export declare abstract class ModalBase extends ModalFactory {
    _modal: HTMLDivElement;
    _container: HTMLDivElement;
    _closeBtn: HTMLDivElement;
    _content: HTMLDivElement;
    constructor(props?: ModalProps);
    abstract onClose(e: any): void;
    _onClose(e: any): void;
}
