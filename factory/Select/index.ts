import { SelectProps } from "../../props/Select";
import { InputDefault } from "../../default/Input";
import { SpanDefault } from "../../default/Span";

export class SelectFactory {

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
        const input = new InputDefault({
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
            const option = this.createOption(this._props.options[i], optionContainer, input);
            optionContainer.appendChild(option);
        }
        optionContainer.style.width = `calc(${this._props.width} - var(--half-padding) - 2px)`;
        return optionContainer;
    }

    createOption(text: string, optionContainer: HTMLDivElement, input: HTMLInputElement): HTMLSpanElement {
        const option = new SpanDefault(text);
        option._span.classList.add("option");
        option._span.addEventListener("click", (e: MouseEvent) => {
            input.value = (e.target as HTMLElement).innerHTML;
            this.filterItems(optionContainer, (e.target as HTMLElement).innerHTML);
        });
        return option._span;
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