import { LinkProps } from "../../props/Link";
export declare class LinkFactory {
    _props: LinkProps;
    constructor(props: LinkProps);
    createLink(): HTMLSpanElement;
}
