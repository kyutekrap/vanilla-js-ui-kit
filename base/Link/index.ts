import { LinkProps } from "../../props/Link";
import { LinkFactory } from "../../factory/Link";

export abstract class LinkBase extends LinkFactory {

    _link: HTMLSpanElement;

    constructor(props: LinkProps) {
        super(props);
        this._link = super.createLink();
    }

    abstract onClick(): void;

    _onClick() {
        return;
    }
}