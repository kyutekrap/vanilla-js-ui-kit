import { SearchProps } from "../../props";
declare class Factory {
    _props: SearchProps;
    constructor(props: SearchProps);
    createSearch(): HTMLDivElement;
    createIcon(): HTMLDivElement;
    createInput(): HTMLInputElement;
}
export declare abstract class SearchBase extends Factory {
    _search: HTMLDivElement;
    _icon: HTMLDivElement;
    _input: HTMLInputElement;
    constructor(props: SearchProps);
    abstract onChange(e: Event): void;
    _onChange(e: Event): void;
}
export {};
