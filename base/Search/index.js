import { SearchProps } from "../../props/index.js";
import { HBoxBase as HBox, BackgroundBase as Background, InputBase as Input } from "../index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createSearch() {
        const search = new HBox();
        search.initialize();
        search._hBox.classList.add("search");
        return search._hBox;
    }

    createIcon() {
        const glass = new Background({
            width: "15px",
            height: "15px",
            src: "/glass.svg"
        });
        glass.initialize();
        return glass._background;
    }

    createInput() {
        const input = new Input();
        input.initialize();
        return input._input;
    }
}

export class SearchBase extends Factory {

    _search;
    _icon;
    _input;

    constructor(props = new SearchProps()) {
        super({...new SearchProps(), ...props})
    }

    initialize() {
        this._search = super.createSearch();
        this._icon = super.createIcon();
        this._search.appendChild(this._icon);
        this._input = super.createInput();
        this._search.appendChild(this._input);
    }

    onChange(e) {
        return;
    }
}