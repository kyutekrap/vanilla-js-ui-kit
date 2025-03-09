import { BackgroundDefault } from "../../default/Background";
import { HBoxDefault } from "../../default/HBox";
import { InputDefault } from "../../default/Input";
import { SearchProps } from "../../props/Search";

export class SearchFactory {

    _props: SearchProps;

    constructor(props: SearchProps) {
        this._props = props;
    }

    createSearch(): HTMLDivElement {
        const search = new HBoxDefault();
        search._hBox.classList.add("search");
        search._hBox.style.width = this._props.width ?? "100%";
        return search._hBox;
    }

    createIcon(): HTMLDivElement {
        const glass = new BackgroundDefault({
            width: "15px",
            height: "15px",
            src: "/glass.svg"
        });
        return glass._background;
    }

    createInput(): HTMLInputElement {
        const input = new InputDefault();
        return input._input;
    }
}