import { FooterProps } from "../../props/Footer";
import { FooterFactory } from "../../factory/Footer";
export declare abstract class FooterBase extends FooterFactory {
    _footer: HTMLDivElement;
    constructor(props: FooterProps);
}
