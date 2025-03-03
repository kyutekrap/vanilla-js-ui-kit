import { BackgroundBase } from "../../base/Background";
import { BackgroundProps } from "../../props/Background";

export class BackgroundDefault extends BackgroundBase {
    constructor(props: BackgroundProps) {
        super(props); 
        this._background.addEventListener("click", (e) => this.onClick(e));
    }

    onClick(e: any) {
        super._onClick(e);
    }
}