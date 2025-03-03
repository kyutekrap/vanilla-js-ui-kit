import { AccordionProps } from "../../props/Accordion";
import { AccordionFactory } from "../../factory/Accordion";
export declare abstract class AccordionBase extends AccordionFactory {
    _isOpen: boolean;
    _accordion: HTMLDivElement;
    _header: HTMLDivElement;
    _headerTitle: HTMLSpanElement;
    _headerImage: HTMLDivElement;
    _content: HTMLDivElement;
    constructor(props: AccordionProps);
    abstract onToggle(e: any): void;
    _onToggle(e: any): void;
}
