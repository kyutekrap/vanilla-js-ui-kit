import { LinkBase } from "../../base/Link";
import { LinkProps } from "../../props/Link";

export class LinkDefault extends LinkBase {
    constructor(props: LinkProps) {
        super(props);
    }

    onClick() {
        super._onClick();
    }
}