import { FooterProps } from "../../props";
declare class Factory {
    _props: FooterProps;
    constructor(props: FooterProps);
    createFooter(): HTMLDivElement;
}
export declare abstract class FooterBase extends Factory {
    _footer: HTMLDivElement;
    constructor(props: FooterProps);
}
export {};
