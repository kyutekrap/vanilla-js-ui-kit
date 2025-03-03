import { SelectProps } from "../../props";
declare class Factory {
    _props: SelectProps;
    constructor(props: SelectProps);
    createSelect(): HTMLDivElement;
    createInput(): HTMLInputElement;
    createOptionContainer(input: HTMLInputElement): HTMLDivElement;
    filterItems(optionContainer: HTMLDivElement, filterKey: string): void;
}
export declare abstract class SelectBase extends Factory {
    _select: HTMLDivElement;
    _input: HTMLInputElement;
    _optionContainer: HTMLDivElement;
    _options: string[];
    constructor(props: SelectProps);
    abstract onChange(): void;
    abstract onFocus(): void;
    abstract onFocusOut(): void;
    _onChange(): void;
    _onFocus(): void;
    _onFocusOut(): void;
}
export {};
