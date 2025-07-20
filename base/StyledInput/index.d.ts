import { StyledInputProps } from "../../props/StyledInput";
import { StyledInputFactory } from "../../factory/StyledInput";
export declare abstract class StyledInputBase extends StyledInputFactory {
    _styledInput: HTMLDivElement;
    _styledInputContent: HTMLDivElement;
    _input: HTMLInputElement;
    constructor(props: StyledInputProps);
}
