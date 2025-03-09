import { AccordionBase } from "../../base/Accordion";
import { AccordionProps } from "../../props/Accordion";

export class AccordionDefault extends AccordionBase {
    constructor(props: AccordionProps) {
        super(props);
        this._accordion.addEventListener("click", (e) => this.onToggle(e));
    }

    onToggle(e: any) {
        super._onToggle(e);
    }
}