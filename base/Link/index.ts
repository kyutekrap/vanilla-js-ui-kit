import { LinkProps } from "../../props";
import { SpanBase as Span } from "../Span";
import { SmallBase as Small } from "../Small";

class Factory {

    _props: LinkProps;

    constructor(props: LinkProps) {
        this._props = props;
    }

    createLink(): HTMLSpanElement {
        var link;
        if (this._props.size === "medium") {
            link = new Span(this._props.text);
            link._span.classList.add("link");
            link._span.classList.add(this._props.variant);
            return link._span;
        } else {
            link = new Small(this._props.text);
            link._small.classList.add("link");
            link._small.classList.add(this._props.variant);
            return link._small;
        }
    }
}

export class LinkBase extends Factory {

    _link: HTMLSpanElement;

    constructor(props: LinkProps) {
        super(props);
        this._link = super.createLink();
    }

    onClick() {
        return;
    }
}