import { InputProps } from "../../props/Input";
import { InputFactory } from "../../factory/Input";

export abstract class InputBase extends InputFactory {

    _input: HTMLInputElement;

    constructor(props: InputProps = {}) {
        super(props);
        this._input = super.createInput();
    }
}