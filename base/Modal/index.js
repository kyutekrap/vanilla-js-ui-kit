import { VBoxBase as VBox } from "../VBox/index.js";
import { BackgroundBase as Background } from "../Background/index.js";
import { ModalProps } from "../../props/index.js";
import { UI } from "../../util/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createModal() {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        return modal;
    }

    createContainer() {
        const container = document.createElement("div");
        container.classList.add("modal-content");
        return container;
    }

    createCloseBtn() {
        const closeButton = new Background({width: "25px", height: "25px", src: "/close.svg"});
        closeButton.initialize();
        closeButton._background.style.marginLeft = "auto";
        return closeButton._background;
    }

    createContent() {
        const content = new VBox();
        content.initialize();
        return content._vBox;
    }
}

export class ModalBase extends Factory {

    _modal;
    _container;
    _closeBtn;
    _content;

    constructor(props = new ModalProps()) {
        super({...new ModalProps(), ...props})
    }

    initialize() {
        this._modal = super.createModal();
        this._container = super.createContainer();
        this._closeBtn = super.createCloseBtn();
        this._container.appendChild(this._closeBtn);
        this._content = super.createContent();
        this._container.appendChild(this._content);
        this._modal.appendChild(this._container);
        document.body.appendChild(this._modal);
    }

    onClose() {
        this._closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            UI.closeModal();
        })
    }
}