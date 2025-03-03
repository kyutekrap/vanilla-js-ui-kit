import { FooterProps } from "../../props/Footer";

export class FooterFactory {

    _props: FooterProps;

    constructor(props: FooterProps) {
        this._props = props;
    }

    createFooter(): HTMLDivElement {
        const footer = document.createElement("div");
        footer.classList.add("footer");
        for (var i=0; i < this._props.children.length; i++) {
            footer.appendChild(this._props.children[i]);
        }
        return footer;
    }
}