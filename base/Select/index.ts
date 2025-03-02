import { SelectProps } from "../../props";
import { InputBase as Input } from "../Input";
import { SpanBase as Span } from "../Span";

class Factory {

    _props: SelectProps;

    constructor(props: SelectProps) {
        this._props = props;
    }

    createSelect(): HTMLDivElement {
        const select = document.createElement("div");
        select.classList.add("select");
        return select;
    }

    createInput(): HTMLInputElement {
        const input = new Input({
            variant: "text",
            editable: this._props.editable,
            placeholder: this._props.placeholder,
            value: this._props.selected,
            width: this._props.width,
            name: this._props.name,
            required: this._props.required
        });
        return input._input;
    }

    createOptionContainer(input: HTMLInputElement): HTMLDivElement {
        const optionContainer = document.createElement("div");
        optionContainer.classList.add("optionContainer");
        for (var i=0; i < this._props.options.length; i++) {
            const option = new Span(this._props.options[i]);
            option._span.classList.add("option");
            option._span.addEventListener("click", (e: MouseEvent) => {
                input.value = (e.target as HTMLElement).innerHTML;
                this.filterItems(optionContainer, (e.target as HTMLElement).innerHTML);
            });
            optionContainer.appendChild(option._span);
        }
        optionContainer.style.width = `calc(${this._props.width} - var(--half-padding) - 2px)`;
        return optionContainer;
    }

    filterItems(optionContainer: HTMLDivElement, filterKey: string): void {
        Array.from(optionContainer.children).forEach(child => {
            if (!child.innerHTML.toLowerCase().startsWith(filterKey.toLowerCase())) {
                child.classList.add("filter");
            } else {
                child.classList.remove("filter");
            }
        });
    }
}

export class SelectBase extends Factory {

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

    onChange(): void {
        this._input.addEventListener("change", (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target) {
                this.filterItems(this._optionContainer, target.value);
            }
        });
    }    

    onFocus() {
        this._input.addEventListener("focus", (_) => {
            this._optionContainer.classList.add("open");
        });
    }

    onFocusOut() {
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