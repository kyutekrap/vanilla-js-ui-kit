import { FormProps } from "../../props/Form";
import { FormFactory } from "../../factory/Form";
export declare abstract class FormBase extends FormFactory {
    _form: HTMLFormElement;
    constructor(props: FormProps);
    abstract onSubmit(e: any): void;
    _onSubmit(e: any): void;
}
