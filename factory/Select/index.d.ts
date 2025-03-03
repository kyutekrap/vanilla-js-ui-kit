import { SelectProps } from "../../props/Select";
export declare class SelectFactory {
    _props: SelectProps;
    constructor(props: SelectProps);
    createSelect(): HTMLDivElement;
    createInput(): HTMLInputElement;
    createOptionContainer(input: HTMLInputElement): HTMLDivElement;
    filterItems(optionContainer: HTMLDivElement, filterKey: string): void;
}
