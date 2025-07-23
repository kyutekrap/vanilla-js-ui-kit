import { BackgroundProps } from "../../props/Background";
import { BackgroundFactory } from "../../factory/Background";
export declare abstract class BackgroundBase extends BackgroundFactory {
    _background: HTMLDivElement;
    _badge: HTMLDivElement | undefined;
    constructor(props: BackgroundProps);
    abstract onClick(e: any): void;
    abstract updateBadge(badge: string): void;
    _onClick(e: any): void;
    _updateBadge(badge: string): void;
}
