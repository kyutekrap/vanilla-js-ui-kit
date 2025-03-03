import { AccordionBase } from "../../base/Accordion";
import { AccordionProps } from "../../props/Accordion";

export class AccordionDefault extends AccordionBase {
    constructor(props: AccordionProps) {
        super(props);
    }

    onToggle() {
        super._onToggle();
    }
}