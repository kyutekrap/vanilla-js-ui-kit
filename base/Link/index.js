import { LinkProps } from "../../props/index.js";
import { SpanBase as Span } from "../Span/index.js";
import { SmallBase as Small } from "../Small/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createLink() {
        const link = this.parent.size === "medium" ? new Span(this.parent.text) : new Small(this.parent.text);
        link.initialize();
        (link._small ?? link._span).classList.add("link");
        (link._small ?? link._span).classList.add(this.parent.variant);
        return (link._small ?? link._span);
    }
}

export class LinkBase extends Factory {

    _link;

    constructor(props = new LinkProps()) {
        super({...new LinkProps(), ...props})
    }

    initialize() {
        this._link = super.createLink();
    }

    onClick() {
        return;
    }
}