import { ModalProps } from "../../props";
import { UI } from "../../util";
import { BackgroundDefault, VBoxDefault } from "../../default";

class Factory {

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
        const closeButton = new BackgroundDefault({width: "25px", height: "25px", src: "/close.svg"});
        closeButton._background.style.marginLeft = "auto";
        return closeButton._background;
    }

    createContent(): HTMLDivElement {
        const content = new VBoxDefault();
        return content._vBox;
    }
}

export abstract class ModalBase extends Factory {

    _modal: HTMLDivElement;
    _container: HTMLDivElement;
    _closeBtn: HTMLDivElement;
    _content: HTMLDivElement;

    constructor(props: ModalProps = {}) {
        super(props);
        this._modal = super.createModal();
        this._container = super.createContainer();
        this._closeBtn = super.createCloseBtn();
        this._container.appendChild(this._closeBtn);
        this._content = super.createContent();
        this._container.appendChild(this._content);
        this._modal.appendChild(this._container);
        document.body.appendChild(this._modal);
    }

    abstract onClose(): void;

    _onClose() {
        this._closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            UI.closeModal();
        })
    }
}