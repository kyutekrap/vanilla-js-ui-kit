export class SearchBase extends Factory {
    _search: any;
    _icon: any;
    _input: any;
    initialize(): void;
    onChange(e: any): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createSearch(): any;
    createIcon(): any;
    createInput(): any;
}
export {};
