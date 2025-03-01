import { UI } from "../../util";
import { BackgroundBase as Background } from "../Background";
import { DrawerProps } from "../../props";

class Factory {

    _props: DrawerProps;

    constructor(props: DrawerProps) {
        this._props = props;
    }

    createCloseBtn(): HTMLDivElement {
        const closeButton = new Background({width: "30px", height: "30px", src: "/arrow-left.svg"});
        return closeButton._background;
    }

    addChildren(drawer: HTMLDivElement): HTMLDivElement {
        for (var i=0; i < this._props.children.length; i++) {
            drawer.appendChild(this._props.children[i]);
        }
        return drawer;
    }
}

export class DrawerBase extends Factory {

    _drawer: HTMLDivElement;
    _closeBtn: HTMLDivElement;

    constructor(props: DrawerProps) {
        super(props);
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