import { SelectProps } from "../../props/Select";
import { SelectFactory } from "../../factory/Select";
export declare abstract class SelectBase extends SelectFactory {
    _select: HTMLDivElement;
    _input: HTMLInputElement;
    _optionContainer: HTMLDivElement;
    _options: string[];
    constructor(props: SelectProps);
    abstract onChange(e: any): void;
    abstract onFocus(e: any): void;
    abstract onBlur(e: any): void;
    abstract refreshOptions(options: string[]): void;
    _onChange(e: any): void;
    _onFocus(e: any): void;
    _onBlur(e: any): void;
    _refreshOptions(options: string[]): void;
}
