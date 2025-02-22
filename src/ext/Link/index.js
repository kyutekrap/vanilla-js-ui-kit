import { LinkBase } from "vanilla-js-ui-kit";
import { LinkProps } from "vanilla-js-ui-kit/props";

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