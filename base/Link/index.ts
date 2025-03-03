import { LinkProps } from "../../props";
import { SmallDefault, SpanDefault } from "../../default";

class Factory {

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

export abstract class LinkBase extends Factory {

    _link: HTMLSpanElement;

    constructor(props: LinkProps) {
        super(props);
        this._link = super.createLink();
    }

    abstract onClick(): void;

    _onClick() {
        return;
    }
}