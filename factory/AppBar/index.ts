import { HBoxDefault } from "../../default/HBox";
import { AppBarProps } from "../../props/AppBar";

export class AppBarFactory {

    _props: AppBarProps

    constructor(props: AppBarProps) {
        this._props = props;
    }

    createHBox(): HTMLDivElement {
        const hbox = new HBoxDefault(this._props);
        return hbox._hBox;
    }
}