import { DrawerBase } from "vanilla-js-ui-kit";
import { DrawerProps } from "vanilla-js-ui-kit/props";

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