import { BgButtonProps } from "../../props";
declare class Factory {
    _props: BgButtonProps;
    constructor(props: BgButtonProps);
    createBgButton(): HTMLDivElement;
    createBackground(): HTMLDivElement;
}
export declare abstract class BgButtonBase extends Factory {
    _bgButton: HTMLDivElement;
    _background: HTMLDivElement;
    constructor(props: BgButtonProps);
    abstract onClick(): void;
    _onClick(): void;
}
export {};
