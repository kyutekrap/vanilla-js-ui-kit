import { BackgroundBase } from "../../base/Background";
import { BackgroundProps } from "../../props/Background";

export class BackgroundDefault extends BackgroundBase {
    constructor(props: BackgroundProps) {
        super(props);        
    }

    onClick() {
        super._onClick();
    }
}