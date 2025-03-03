import { BgButtonBase } from "../../base";
import { BgButtonProps } from "../../props";

export class BgButtonDefault extends BgButtonBase {
    constructor(props: BgButtonProps) {
        super(props);
    }

    onClick() {
        super._onClick();
    }
}