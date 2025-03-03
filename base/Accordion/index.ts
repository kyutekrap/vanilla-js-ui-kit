import { AccordionProps } from "../../props/Accordion";
import { AccordionFactory } from "../../factory/Accordion";

export abstract class AccordionBase extends AccordionFactory {

    _isOpen: boolean;
    _accordion: HTMLDivElement;
    _header: HTMLDivElement;
    _headerTitle: HTMLSpanElement;
    _headerImage: HTMLDivElement;
    _content: HTMLDivElement;

    constructor(props: AccordionProps) {
        super(props);
        this._isOpen = false;
        this._accordion = document.createElement("div");
        this._accordion.classList.add("accordion");
        this._header = super.createHeader();
        this._headerTitle = super.createHeaderTitle();
        this._header.appendChild(this._headerTitle);
        this._headerImage = super.createHeaderImage();
        this._header.appendChild(this._headerImage);
        this._accordion.appendChild(this._header);
        this._content = super.createContent();
        this._accordion.appendChild(this._content);
    }

    abstract onToggle(e: any): void;
    
    _onToggle(e: any): void {
        if (!this._isOpen) {
            this._content.classList.add("open");
            this._headerImage.style.transform = "rotate(180deg)";
        } else {
            this._content.classList.remove("open");
            this._headerImage.style.transform = "rotate(0deg)";
        }
        this._isOpen = !this._isOpen;
    }
}