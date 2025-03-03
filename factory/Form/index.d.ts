import { FormProps } from "../../props";
declare class Factory {
    _props: FormProps;
    constructor(props: FormProps);
    createForm(): HTMLFormElement;
}
export declare abstract class FormBase extends Factory {
    _form: HTMLFormElement;
    constructor(props: FormProps);
    abstract onSubmit(): void;
    _onSubmit(): void;
}
export {};
