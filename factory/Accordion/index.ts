import { BackgroundDefault } from "../../default/Background";
import { HBoxDefault } from "../../default/HBox";
import { VBoxDefault } from "../../default/VBox";
import { AccordionProps } from "../../props/Accordion";

export class AccordionFactory {

    _props: AccordionProps;

    constructor(props: AccordionProps) {
        this._props = props;
    }

    createHeader(): HTMLDivElement {
        const header = new HBoxDefault();
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
        const headerImage = new BackgroundDefault({ width: "25px", height: "25px", src: "/chev-down.svg" });
        return headerImage._background;
    }

    createContent(): HTMLDivElement {
        const content = new VBoxDefault();
        content._vBox.classList.add("accordion-content");
        for (let i = 0; i < this._props.children.length; i++) {
            content._vBox.appendChild(this._props.children[i]);
        }
        return content._vBox;
    }
}