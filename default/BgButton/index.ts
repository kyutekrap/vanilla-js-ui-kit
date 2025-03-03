import { BgButtonBase } from "../../base/BgButton";
import { BgButtonProps } from "../../props/BgButton";

export class BgButtonDefault extends BgButtonBase {
    constructor(props: BgButtonProps) {
        super(props);
    }

    onClick() {
        super._onClick();
    }
}