import { UI } from "../../util/index.js";
import { BackgroundBase as Background } from "../Background/index.js";
import { DrawerProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createCloseBtn() {
        const closeButton = new Background({width: "30px", height: "30px", src: "/arrow-left.svg"});
        closeButton.initialize();
        return closeButton._background;
    }

    addChildren(drawer) {
        for (var i=0; i < this.parent.children.length; i++) {
            drawer.appendChild(this.parent.children[i]);
        }
        return drawer;
    }
}

export class DrawerBase extends Factory {

    _drawer;
    _closeBtn;

    constructor(props = new DrawerProps()) {
        super({...new DrawerProps(), ...props})
    }

    initialize() {
        this._drawer = document.createElement("div");
        this._drawer.classList.add("drawer");

        this._closeBtn = super.createCloseBtn();
        this._drawer.appendChild(this._closeBtn);

        this._drawer = super.addChildren(this._drawer);
        document.body.appendChild(this._drawer);
    }

    onClose() {
        this._closeBtn.addEventListener("click", (e) => {
            UI.closeDrawer();
        });
    }
}