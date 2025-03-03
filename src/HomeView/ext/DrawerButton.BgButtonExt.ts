import { BgButtonBase } from "../../../base";
import { BgButtonProps } from "../../../props";
import { UI } from "../../../util";

export class DrawerButton extends BgButtonBase {
    constructor(props: BgButtonProps) {
        super(props);
    }

    onClick() {
        UI.openDrawer();
    }
}