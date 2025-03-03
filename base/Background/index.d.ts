import { BackgroundProps } from "../../props";
declare class Factory {
    _props: BackgroundProps;
    constructor(props: BackgroundProps);
    createBackground(): HTMLDivElement;
    createBadge(): HTMLDivElement | undefined;
}
export declare abstract class BackgroundBase extends Factory {
    _background: HTMLDivElement;
    _badge: HTMLDivElement | undefined;
    constructor(props: BackgroundProps);
    abstract onClick(): void;
    _onClick(): void;
}
export {};
