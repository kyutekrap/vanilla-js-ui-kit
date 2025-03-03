import { DrawerProps } from "../../props/Drawer";
export declare class DrawerFactory {
    _props: DrawerProps;
    constructor(props: DrawerProps);
    createCloseBtn(): HTMLDivElement;
    addChildren(drawer: HTMLDivElement): HTMLDivElement;
}
