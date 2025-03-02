import { FooterProps } from "../../props";

class Factory {

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

export class FooterBase extends Factory {

    _footer: HTMLDivElement;

    constructor(props: FooterProps) {
        super(props);
        this._footer = super.createFooter();
        document.body.appendChild(this._footer);
    }
}