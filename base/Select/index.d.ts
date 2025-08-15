import { SelectProps } from "../../props/Select";
import { SelectFactory } from "../../factory/Select";
export declare abstract class SelectBase extends SelectFactory {
    _select: HTMLDivElement;
    _input: HTMLInputElement;
    _optionContainer: HTMLDivElement;
    _options: string[];
    constructor(props: SelectProps);
    abstract refreshOptions(options: string[]): void;
    _refreshOptions(options: string[]): void;
}
