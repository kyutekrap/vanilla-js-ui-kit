import { AccordionProps } from "../../props/Accordion";
export declare class AccordionFactory {
    _props: AccordionProps;
    constructor(props: AccordionProps);
    createHeader(): HTMLDivElement;
    createHeaderTitle(): HTMLSpanElement;
    createHeaderImage(): HTMLDivElement;
    createContent(): HTMLDivElement;
}
