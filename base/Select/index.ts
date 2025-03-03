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

    abstract onChange(): void;
    abstract onFocus(): void;
    abstract onFocusOut(): void;

    _onChange(): void {
        this._input.addEventListener("change", (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target) {
                this.filterItems(this._optionContainer, target.value);
            }
        });
    }    

    _onFocus() {
        this._input.addEventListener("focus", (_) => {
            this._optionContainer.classList.add("open");
        });
    }

    _onFocusOut() {
        document.addEventListener("click", (e) => {
            if (e.target !== this._input) {
                this._optionContainer.classList.remove("open");
                if (!this._options.includes(this._input.value)) {
                    this._input.value = "";
                }
            }
        });
    }
}