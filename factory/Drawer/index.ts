import { DrawerProps } from "../../props/Drawer";
import { BackgroundDefault } from "../../default/Background";

export class DrawerFactory {

    _props: DrawerProps;

    constructor(props: DrawerProps) {
        this._props = props;
    }

    createCloseBtn(): HTMLDivElement {
        const closeButton = new BackgroundDefault({width: "30px", height: "30px", src: "/arrow-left.svg"});
        return closeButton._background;
    }

    addChildren(drawer: HTMLDivElement): HTMLDivElement {
        for (var i=0; i < this._props.children.length; i++) {
            drawer.appendChild(this._props.children[i]);
        }
        return drawer;
    }
}