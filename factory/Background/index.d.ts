import { BackgroundProps } from "../../props/Background";
export declare class BackgroundFactory {
    _props: BackgroundProps;
    constructor(props: BackgroundProps);
    createBackground(): HTMLDivElement;
    createBadge(): HTMLDivElement | undefined;
}
