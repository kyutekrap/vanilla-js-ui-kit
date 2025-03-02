import { SearchProps } from "../../props";
import { HBoxBase as HBox, BackgroundBase as Background, InputBase as Input } from "..";

class Factory {

    _props: SearchProps;

    constructor(props: SearchProps) {
        this._props = props;
    }

    createSearch(): HTMLDivElement {
        const search = new HBox();
        search._hBox.classList.add("search");
        return search._hBox;
    }

    createIcon(): HTMLDivElement {
        const glass = new Background({
            width: "15px",
            height: "15px",
            src: "/glass.svg"
        });
        return glass._background;
    }

    createInput(): HTMLInputElement {
        const input = new Input();
        return input._input;
    }
}

export class SearchBase extends Factory {

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

    onChange(e: MouseEvent) {
        return;
    }
}