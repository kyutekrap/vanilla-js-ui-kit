import { BgButtonProps } from "../../props/BgButton";
import { BgButtonFactory } from "../../factory/BgButton";
export declare abstract class BgButtonBase extends BgButtonFactory {
    _bgButton: HTMLDivElement;
    _background: HTMLDivElement;
    constructor(props: BgButtonProps);
    abstract onClick(e: any): void;
    _onClick(e: any): void;
}
