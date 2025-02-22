export class VBoxBase extends Factory {
    _vBox: any;
    initialize(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createVBox(): HTMLDivElement;
}
export {};
