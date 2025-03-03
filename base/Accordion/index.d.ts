import { AccordionProps } from "../../props";
declare class Factory {
    _props: AccordionProps;
    constructor(props: AccordionProps);
    createHeader(): HTMLDivElement;
    createHeaderTitle(): HTMLSpanElement;
    createHeaderImage(): HTMLDivElement;
    createContent(): HTMLDivElement;
}
export declare abstract class AccordionBase extends Factory {
    _isOpen: boolean;
    _accordion: HTMLDivElement;
    _header: HTMLDivElement;
    _headerTitle: HTMLSpanElement;
    _headerImage: HTMLDivElement;
    _content: HTMLDivElement;
    constructor(props: AccordionProps);
    abstract onToggle(): void;
    _onToggle(): void;
}
export {};
