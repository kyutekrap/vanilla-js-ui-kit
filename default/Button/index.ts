import { ButtonBase } from "../../base/Button";
import { ButtonProps } from "../../props/Button";

export class ButtonDefault extends ButtonBase {
    constructor(props: ButtonProps) {
        super(props);        
    }

    onClick() {
        super._onClick();
    }
}