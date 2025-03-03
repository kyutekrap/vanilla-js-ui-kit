import { DrawerProps } from "../../props/Drawer";
import { DrawerFactory } from "../../factory/Drawer";
export declare abstract class DrawerBase extends DrawerFactory {
    _drawer: HTMLDivElement;
    _closeBtn: HTMLDivElement;
    constructor(props: DrawerProps);
    abstract onClose(e: any): void;
    _onClose(e: any): void;
}
