import { BgButtonProps } from "../../props/BgButton";
import { BackgroundDefault } from "../../default/Background";
export declare class BgButtonFactory {
    _props: BgButtonProps;
    constructor(props: BgButtonProps);
    createBgButton(): HTMLDivElement;
    createBackground(): BackgroundDefault;
}
