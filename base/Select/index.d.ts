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
    abstract onFocusOut(e: any): void;
    _onChange(e: any): void;
    _onFocus(e: any): void;
    _onFocusOut(e: any): void;
}
