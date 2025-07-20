import { BoxProps } from "../../props/Box";
export declare class BoxFactory {
    _props: BoxProps;
    constructor(props: BoxProps);
    createBox(): HTMLDivElement;
}
