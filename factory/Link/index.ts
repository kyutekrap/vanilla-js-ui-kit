import { SmallDefault } from "../../default/Small";
import { SpanDefault } from "../../default/Span";
import { LinkProps } from "../../props/Link";

export class LinkFactory {

    _props: LinkProps;

    constructor(props: LinkProps) {
        this._props = props;
    }

    createLink(): HTMLSpanElement {
        var link;
        if (this._props.size === "medium") {
            link = new SpanDefault(this._props.text);
            link._span.classList.add("link");
            link._span.classList.add(this._props.variant);
            return link._span;
        } else {
            link = new SmallDefault(this._props.text);
            link._small.classList.add("link");
            link._small.classList.add(this._props.variant);
            return link._small;
        }
    }
}