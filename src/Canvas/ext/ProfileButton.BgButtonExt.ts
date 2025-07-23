import { BgButtonBase } from "../../../base";
import { ButtonDefault } from "../../../default";
import { BgButtonProps } from "../../../props";
import { openModal } from "../../../util/openModal";

export class ProfileButton extends BgButtonBase {
    
    constructor(props: BgButtonProps) {
        super(props);
        this._bgButton.addEventListener("click", this.onClick);
    }

    onClick(e: any): void {
        const button = new ButtonDefault({
            variant: "text",
            size: "medium",
            content: "Logout",
            width: "100%",
            type: "button"
        });
        openModal([button._button]);
    }

    updateBadge(badge: string): void {
        super._updateBadge(badge);
    }
}