import { BackgroundDefault } from "../../default/Background";
import { VBoxDefault } from "../../default/VBox";
import { ModalProps } from "../../props/Modal";

export class ModalFactory {

    _props: ModalProps;

    constructor(props: ModalProps) {
        this._props = props;
    }

    createModal(): HTMLDivElement {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        return modal;
    }

    createContainer(): HTMLDivElement {
        const container = document.createElement("div");
        container.classList.add("modal-content");
        return container;
    }

    createCloseBtn(): HTMLDivElement {
        const closeButton = new BackgroundDefault({width: "20px", height: "20px", src: "/close.svg"});
        closeButton._background.style.marginLeft = "auto";
        closeButton._background.style.marginBottom = "10px";
        closeButton._background.style.cursor = "pointer";
        return closeButton._background;
    }

    createContent(): HTMLDivElement {
        const content = new VBoxDefault();
        return content._vBox;
    }
}