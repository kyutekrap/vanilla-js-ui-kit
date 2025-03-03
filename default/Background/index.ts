import { BackgroundBase } from "../../base";
import { BackgroundProps } from "../../props";

export class BackgroundDefault extends BackgroundBase {
    constructor(props: BackgroundProps) {
        super(props);        
    }

    onClick() {
        super._onClick();
    }
}