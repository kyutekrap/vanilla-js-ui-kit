import { LinkBase } from "../../../base/index.js";
import { LinkProps } from "../../../props/index.js";

export class Link extends LinkBase {
    constructor(props = new LinkProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }

    onClick() {
        super.onClick();
    }
}