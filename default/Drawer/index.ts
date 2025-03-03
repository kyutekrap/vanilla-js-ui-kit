import { DrawerBase } from "../../base/Drawer";
import { DrawerProps } from "../../props/Drawer";

export class DrawerDefault extends DrawerBase {
    constructor(props: DrawerProps) {
        super(props);        
    }

    onClose() {
        super._onClose();
    }
}