import { ModalProps } from "../../props/Modal";
export declare class ModalFactory {
    _props: ModalProps;
    constructor(props: ModalProps);
    createModal(): HTMLDivElement;
    createContainer(): HTMLDivElement;
    createCloseBtn(): HTMLDivElement;
    createContent(): HTMLDivElement;
}
