export class FooterBase extends Factory {
    _footer: any;
    initialize(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createFooter(): HTMLDivElement;
}
export {};
