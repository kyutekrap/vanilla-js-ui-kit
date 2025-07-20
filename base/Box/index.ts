import { BoxProps } from "../../props/Box";
import { BoxFactory } from "../../factory/Box";

export abstract class BoxBase extends BoxFactory {

    _box: HTMLDivElement;
    
    constructor(props: BoxProps) {
        super(props);
        this._box = super.createBox();
    }
}