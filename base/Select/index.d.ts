export class SelectBase extends Factory {
    _select: any;
    _input: any;
    _optionContainer: any;
    initialize(): void;
    onChange(): void;
    onFocus(): void;
    onFocusOut(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createSelect(): HTMLDivElement;
    createInput(): any;
    createOptionContainer(input: any): void;
    filterItems(optionContainer: any, filterKey: any): void;
}
export {};
