export class BgButtonBase extends Factory {
    _bgButton: null;
    _background: null;
    initialize(): void;
    onClick(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createBgButton(): HTMLDivElement;
    createBackground(): any;
}
export {};
