import { BgButtonProps } from "../../props/BgButton";
export declare class BgButtonFactory {
    _props: BgButtonProps;
    constructor(props: BgButtonProps);
    createBgButton(): HTMLDivElement;
    createBackground(): HTMLDivElement;
}
