import { DrawerBase } from "../../../base/index.js";
import { DrawerProps } from "../../../props/index.js";

export class Drawer extends DrawerBase {
    constructor(props = new DrawerProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }

    onClose() {
        super.onClose();
    }
}