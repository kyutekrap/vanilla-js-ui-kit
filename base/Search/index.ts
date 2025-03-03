import { SearchProps } from "../../props/Search";
import { SearchFactory } from "../../factory/Search";

export abstract class SearchBase extends SearchFactory {

    _search: HTMLDivElement;
    _icon: HTMLDivElement;
    _input: HTMLInputElement;

    constructor(props: SearchProps) {
        super(props);
        this._search = super.createSearch();
        this._icon = super.createIcon();
        this._search.appendChild(this._icon);
        this._input = super.createInput();
        this._search.appendChild(this._input);
    }

    abstract onChange(e: any): void;

    _onChange(e: any) {
        return;
    }
}