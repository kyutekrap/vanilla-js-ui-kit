import { BgButtonBase } from "../../../base";
import { BgButtonProps } from "../../../props";
export declare class DrawerButton extends BgButtonBase {
    constructor(props: BgButtonProps);
    onClick(): void;
    updateBadge(badge: string): void;
}
