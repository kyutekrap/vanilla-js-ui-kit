import { BgButtonBase, BgButtonProps, LinkDefault } from "vanilla-js-ui-kit";
import { UI } from "vanilla-js-ui-kit/util";

export class ProfileButton extends BgButtonBase {
    constructor(props: BgButtonProps) {
        super(props);
        this._bgButton.addEventListener("click", () => this.onClick());
    }

    onClick(): void {
        const link = new LinkDefault({
            size: "medium",
            variant: "secondary",
            text: "Logout"
        });
        UI.openModal(link._link);
    }
}