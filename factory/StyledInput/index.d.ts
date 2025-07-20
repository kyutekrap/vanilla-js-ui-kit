import { StyledInputProps } from "../../props/StyledInput";
export declare class StyledInputFactory {
    _props: StyledInputProps;
    constructor(props: StyledInputProps);
    createContainer(): HTMLDivElement;
    createStyledInputContent(): HTMLDivElement;
    createInput(): HTMLInputElement;
}
