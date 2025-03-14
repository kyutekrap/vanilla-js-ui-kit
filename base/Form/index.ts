import { FormProps } from "../../props/Form";
import { FormFactory } from "../../factory/Form";

export abstract class FormBase extends FormFactory {

    _form: HTMLFormElement;

    constructor(props: FormProps) {
        super(props);
        this._form = super.createForm();
    }

    abstract onSubmit(e: any): void;

    _onSubmit(e: any) {
        return;
    }
}