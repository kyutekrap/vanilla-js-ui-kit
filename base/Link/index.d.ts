export class LinkBase extends Factory {
    _link: any;
    initialize(): void;
    onClick(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createLink(): any;
}
export {};
