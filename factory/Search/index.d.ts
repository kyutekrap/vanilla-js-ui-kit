import { SearchProps } from "../../props/Search";
export declare class SearchFactory {
    _props: SearchProps;
    constructor(props: SearchProps);
    createSearch(): HTMLDivElement;
    createIcon(): HTMLDivElement;
    createInput(): HTMLInputElement;
}
