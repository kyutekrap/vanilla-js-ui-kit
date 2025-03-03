import { AccordionBase } from "../../base";
import { AccordionProps } from "../../props";

export class AccordionDefault extends AccordionBase {
    constructor(props: AccordionProps) {
        super(props);
    }

    onToggle() {
        super._onToggle();
    }
}