import { DrawerBase } from "../../base/Drawer";
import { DrawerProps } from "../../props/Drawer";

export class DrawerDefault extends DrawerBase {
    constructor(props: DrawerProps) {
        super(props);
        this._closeBtn.addEventListener("click", (e) => this.onClose(e));
    }

    onClose(e: any) {
        super._onClose(e);
    }
}