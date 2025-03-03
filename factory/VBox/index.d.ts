import { VBoxProps } from "../../props";
declare class Factory {
    _props: VBoxProps;
    constructor(props: VBoxProps);
    createVBox(): HTMLDivElement;
}
export declare abstract class VBoxBase extends Factory {
    _vBox: HTMLDivElement;
    constructor(props?: VBoxProps);
}
export {};
