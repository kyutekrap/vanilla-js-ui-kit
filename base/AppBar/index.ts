import { HBoxDefault } from "../../default";
import { AppBarProps } from "../../props";

class Factory {

    _props: AppBarProps

    constructor(props: AppBarProps) {
        this._props = props;
    }

    createHBox(): HTMLDivElement {
        const hbox = new HBoxDefault(this._props);
        return hbox._hBox;
    }
}

export abstract class AppBarBase extends Factory {

    _appBar: HTMLDivElement;

    constructor(props: AppBarProps) {
        super(props);
        this._appBar = super.createHBox();
        this._appBar.classList.add("appBar");
        document.body.appendChild(this._appBar);
    }
}