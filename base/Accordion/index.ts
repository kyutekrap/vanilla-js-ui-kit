import { VBoxBase as VBox } from "../VBox";
import { HBoxBase as HBox } from "../HBox";
import { BackgroundBase as Background } from "../Background";
import { AccordionProps } from "../../props";

class Factory {

    _props: AccordionProps;

    constructor(props: AccordionProps) {
        this._props = props;
    }

    createHeader(): HTMLDivElement {
        const header = new HBox();
        header._hBox.classList.add("accordion-header");
        return header._hBox;
    }
    
    createHeaderTitle(): HTMLSpanElement {
        const headerTitle = document.createElement("span");
        headerTitle.classList.add("subHeader");
        headerTitle.textContent = this._props.caption;
        headerTitle.style.flex = "1";
        return headerTitle;
    }

    createHeaderImage(): HTMLDivElement {
        const headerImage = new Background({ width: "25px", height: "25px", src: "/chev-down.svg" });
        return headerImage._background;
    }

    createContent(): HTMLDivElement {
        const content = new VBox();
        content._vBox.classList.add("accordion-content");
        for (let i = 0; i < this._props.children.length; i++) {
            content._vBox.appendChild(this._props.children[i]);
        }
        return content._vBox;
    }
}

export class AccordionBase extends Factory {

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
    
    onToggle(): void {
        this._header.addEventListener('click', () => {
            if (!this._isOpen) {
                this._content.classList.add("open");
                this._headerImage.style.transform = "rotate(180deg)";
            } else {
                this._content.classList.remove("open");
                this._headerImage.style.transform = "rotate(0deg)";
            }
            this._isOpen = !this._isOpen;
        });
    }
}