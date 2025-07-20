import { StyledInputProps } from "../../props/StyledInput";
import { StyledInputFactory } from "../../factory/StyledInput";

export abstract class StyledInputBase extends StyledInputFactory {

    _styledInput: HTMLDivElement;
    _styledInputContent: HTMLDivElement;
    _input: HTMLInputElement;

    constructor(props: StyledInputProps) {
        super(props);
        this._styledInput = super.createContainer();
        this._styledInputContent = super.createStyledInputContent();
        this._input = super.createInput();
        this._styledInput.appendChild(this._styledInputContent);
        this._styledInput.appendChild(this._input);
    }
}