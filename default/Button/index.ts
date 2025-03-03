import { ButtonBase } from "../../base";
import { ButtonProps } from "../../props";

export class ButtonDefault extends ButtonBase {
    constructor(props: ButtonProps) {
        super(props);        
    }

    onClick() {
        super._onClick();
    }
}