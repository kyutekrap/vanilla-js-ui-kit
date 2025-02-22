import { VBoxBase as VBox } from "../VBox/index.js";
import { HBoxBase as HBox } from "../HBox/index.js";
import { BackgroundBase as Background } from "../Background/index.js";
import { AccordionProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createHeader() {
        const header = new HBox();
        header.initialize();
        header._hBox.classList.add("accordion-header");
        return header;
    }
    
    createHeaderTitle() {
        const headerTitle = document.createElement("span");
        headerTitle.classList.add("subHeader");
        headerTitle.textContent = this.parent.caption;
        headerTitle.style.flex = "1";
        return headerTitle;
    }

    createHeaderImage() {
        const headerImage = new Background({ width: "25px", height: "25px", src: "/chev-down.svg" });
        headerImage.initialize();
        return headerImage._background;
    }

    createContent() {
        const content = new VBox();
        content.initialize();
        content.VBox.classList.add("accordion-content");
        for (let i = 0; i < this.parent.children.length; i++) {
            content.appendChild(this.parent.children[i]);
        }
        return content;
    }
}

export class AccordionBase extends Factory {

    _isOpen;
    _accordion;
    _header;
    _headerTitle;
    _headerImage;
    _content;

    constructor(props = new AccordionProps()) {
        super({...new AccordionProps(), ...props})
        this._isOpen = false;
    }

    initialize() {
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

    onToggle() {
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