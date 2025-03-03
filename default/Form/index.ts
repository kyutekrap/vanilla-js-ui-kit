import { FormBase } from "../../base";
import { FormProps } from "../../props";

export class FormDefault extends FormBase {
    constructor(props: FormProps) {
        super(props);
    }

    onSubmit() {
        super._onSubmit();
    }
}