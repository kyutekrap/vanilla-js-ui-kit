import { BoxProps } from "../../props/Box";
import { BoxFactory } from "../../factory/Box";
export declare abstract class BoxBase extends BoxFactory {
    _box: HTMLDivElement;
    constructor(props: BoxProps);
}
