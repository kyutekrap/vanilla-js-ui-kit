import { SelectProps } from "../../props/Select";
import { SelectFactory } from "../../factory/Select";

export abstract class SelectBase extends SelectFactory {

    _select: HTMLDivElement;
    _input: HTMLInputElement;
    _optionContainer: HTMLDivElement;
    _options: string[];

    constructor(props: SelectProps) {
        super(props);
        this._select = super.createSelect();
        this._input = super.createInput();
        this._select.appendChild(this._input);
        this._optionContainer = super.createOptionContainer(this._input);
        this._select.appendChild(this._optionContainer);
        this._options = props.options;
    }

    abstract refreshOptions(options: string[]): void;

    _refreshOptions(options: string[]): void {
        this._optionContainer.replaceChildren(
            ...options.map(option => super.createOption(option, this._input))
        );
        this._input.value = "";
        this._options = options;
    }
}