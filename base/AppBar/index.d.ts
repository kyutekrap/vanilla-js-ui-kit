export class AppBarBase extends Factory {
    _appBar: any;
    initialize(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createHBox(): any;
}
export {};
