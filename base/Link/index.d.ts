import { LinkProps } from "../../props/Link";
import { LinkFactory } from "../../factory/Link";
export declare abstract class LinkBase extends LinkFactory {
    _link: HTMLSpanElement;
    constructor(props: LinkProps);
    abstract onClick(e: any): void;
    _onClick(e: any): void;
}
