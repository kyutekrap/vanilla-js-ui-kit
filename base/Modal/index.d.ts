export class ModalBase extends Factory {
    _modal: any;
    _container: any;
    _closeBtn: any;
    _content: any;
    initialize(): void;
    onClose(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createModal(): HTMLDivElement;
    createContainer(): HTMLDivElement;
    createCloseBtn(): any;
    createContent(): any;
}
export {};
