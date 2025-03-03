import { AppBarProps } from "../../props/AppBar";
import { AppBarFactory } from "../../factory/AppBar";

export abstract class AppBarBase extends AppBarFactory {

    _appBar: HTMLDivElement;

    constructor(props: AppBarProps) {
        super(props);
        this._appBar = super.createHBox();
        this._appBar.classList.add("appBar");
        document.body.appendChild(this._appBar);
    }
}