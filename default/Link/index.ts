import { LinkBase } from "../../base/Link";
import { LinkProps } from "../../props/Link";

export class LinkDefault extends LinkBase {
    constructor(props: LinkProps) {
        super(props);
        this._link.addEventListener("click", (e) => this.onClick(e));
    }

    onClick(e: any) {
        super._onClick(e);
    }
}