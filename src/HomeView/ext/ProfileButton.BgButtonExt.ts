import { BgButtonBase } from "../../../base";
import { BgButtonProps } from "../../../props";

export class ProfileButton extends BgButtonBase {
    constructor(props: BgButtonProps) {
        super(props);
        this._bgButton.addEventListener("click", this.onClick);
    }

    onClick(e: any): void {
        
    }
}