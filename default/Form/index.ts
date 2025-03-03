import { FormBase } from "../../base/Form";
import { FormProps } from "../../props/Form";

export class FormDefault extends FormBase {
    constructor(props: FormProps) {
        super(props);
    }

    onSubmit() {
        super._onSubmit();
    }
}