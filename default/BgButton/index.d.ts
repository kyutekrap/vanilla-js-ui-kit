import { BgButtonBase } from "../../base/BgButton";
import { BgButtonProps } from "../../props/BgButton";
export declare class BgButtonDefault extends BgButtonBase {
    constructor(props: BgButtonProps);
    onClick(e: any): void;
    updateBadge(badge: string): void;
}
