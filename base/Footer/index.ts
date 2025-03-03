import { FooterProps } from "../../props/Footer";
import { FooterFactory } from "../../factory/Footer";

export abstract class FooterBase extends FooterFactory {

    _footer: HTMLDivElement;

    constructor(props: FooterProps) {
        super(props);
        this._footer = super.createFooter();
        document.body.appendChild(this._footer);
    }
}