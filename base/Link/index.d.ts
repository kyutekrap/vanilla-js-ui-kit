import { LinkProps } from "../../props";
declare class Factory {
    _props: LinkProps;
    constructor(props: LinkProps);
    createLink(): HTMLSpanElement;
}
export declare abstract class LinkBase extends Factory {
    _link: HTMLSpanElement;
    constructor(props: LinkProps);
    abstract onClick(): void;
    _onClick(): void;
}
export {};
