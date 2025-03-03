import { FormProps } from "../../props/Form";
export declare class FormFactory {
    _props: FormProps;
    constructor(props: FormProps);
    createForm(): HTMLFormElement;
}
