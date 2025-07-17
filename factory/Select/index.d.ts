import { SelectProps } from "../../props/Select";
export declare class SelectFactory {
    _props: SelectProps;
    constructor(props: SelectProps);
    createSelect(): HTMLDivElement;
    createInput(): HTMLInputElement;
    createOptionContainer(input: HTMLInputElement): HTMLDivElement;
    createOption(text: string, optionContainer: HTMLDivElement, input: HTMLInputElement): HTMLSpanElement;
    filterItems(optionContainer: HTMLDivElement, filterKey: string): void;
}
