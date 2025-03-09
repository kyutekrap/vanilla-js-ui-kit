import { SearchProps } from "../../props/Search";
import { SearchFactory } from "../../factory/Search";
export declare abstract class SearchBase extends SearchFactory {
    _search: HTMLDivElement;
    _icon: HTMLDivElement;
    _input: HTMLInputElement;
    constructor(props?: SearchProps);
    abstract onChange(e: any): void;
    _onChange(e: any): void;
}
