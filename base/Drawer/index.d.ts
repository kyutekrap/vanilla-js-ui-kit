export class DrawerBase extends Factory {
    _drawer: any;
    _closeBtn: any;
    initialize(): void;
    onClose(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createCloseBtn(): any;
    addChildren(drawer: any): any;
}
export {};
