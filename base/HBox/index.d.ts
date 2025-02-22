export class HBoxBase extends Factory {
    _hBox: any;
    initialize(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createHBox(): HTMLDivElement;
}
export {};
