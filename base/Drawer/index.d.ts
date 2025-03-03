import { DrawerProps } from "../../props";
declare class Factory {
    _props: DrawerProps;
    constructor(props: DrawerProps);
    createCloseBtn(): HTMLDivElement;
    addChildren(drawer: HTMLDivElement): HTMLDivElement;
}
export declare abstract class DrawerBase extends Factory {
    _drawer: HTMLDivElement;
    _closeBtn: HTMLDivElement;
    constructor(props: DrawerProps);
    abstract onClose(): void;
    _onClose(): void;
}
export {};
