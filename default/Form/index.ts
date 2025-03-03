import { FormBase } from "../../base/Form";
import { FormProps } from "../../props/Form";

export class FormDefault extends FormBase {
    constructor(props: FormProps) {
        super(props);
        this._form.addEventListener("submit", (e) => this.onSubmit(e));
    }

    onSubmit(e: any) {
        super._onSubmit(e);
    }
}