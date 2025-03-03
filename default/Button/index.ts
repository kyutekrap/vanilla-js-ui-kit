import { ButtonBase } from "../../base/Button";
import { ButtonProps } from "../../props/Button";

export class ButtonDefault extends ButtonBase {
    constructor(props: ButtonProps) {
        super(props);
        this._button.addEventListener("click", (e) => this.onClick(e));   
    }

    onClick(e: any) {
        super._onClick(e);
    }
}