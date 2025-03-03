import { LinkBase } from "../../base";
import { LinkProps } from "../../props";

export class LinkDefault extends LinkBase {
    constructor(props: LinkProps) {
        super(props);
    }

    onClick() {
        super._onClick();
    }
}