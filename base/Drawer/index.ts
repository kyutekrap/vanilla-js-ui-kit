import { UI } from "../../util";
import { DrawerProps } from "../../props/Drawer";
import { DrawerFactory } from "../../factory/Drawer";

export abstract class DrawerBase extends DrawerFactory {

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

    abstract onClose(): void;

    _onClose() {
        this._closeBtn.addEventListener("click", (e) => {
            UI.closeDrawer();
        });
    }
}