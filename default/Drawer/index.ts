import { DrawerBase } from "../../base";
import { DrawerProps } from "../../props";

export class DrawerDefault extends DrawerBase {
    constructor(props: DrawerProps) {
        super(props);        
    }

    onClose() {
        super._onClose();
    }
}