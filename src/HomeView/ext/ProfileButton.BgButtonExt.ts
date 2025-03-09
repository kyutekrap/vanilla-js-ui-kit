import { BgButtonBase } from "../../../base";
import { SmallDefault } from "../../../default";
import { BgButtonProps } from "../../../props";
import { openModal } from "../../../util/UI/openModal";

export class ProfileButton extends BgButtonBase {
    constructor(props: BgButtonProps) {
        super(props);
        this._bgButton.addEventListener("click", this.onClick);
    }

    onClick(e: any): void {
        const small = new SmallDefault("Logout")
        openModal([small._small]);
    }
}