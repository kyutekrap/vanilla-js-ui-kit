import { HBoxBase as HBox } from "../HBox/index.js";
import { AppBarProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createHBox() {
        const hbox = new HBox(this.parent);
        hbox.initialize();
        return hbox._hBox;
    }
}

export class AppBarBase extends Factory {

    _appBar;

    constructor(props = new AppBarProps()) {
        super({...new AppBarProps(), ...props})
    }

    initialize() {
        this._appBar = super.createHBox();
        this._appBar.classList.add("appBar");
        document.body.appendChild(this._appBar);
    }
}