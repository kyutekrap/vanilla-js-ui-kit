import { ModalProps } from "../../props";
declare class Factory {
    _props: ModalProps;
    constructor(props: ModalProps);
    createModal(): HTMLDivElement;
    createContainer(): HTMLDivElement;
    createCloseBtn(): HTMLDivElement;
    createContent(): HTMLDivElement;
}
export declare abstract class ModalBase extends Factory {
    _modal: HTMLDivElement;
    _container: HTMLDivElement;
    _closeBtn: HTMLDivElement;
    _content: HTMLDivElement;
    constructor(props?: ModalProps);
    abstract onClose(): void;
    _onClose(): void;
}
export {};
