import { SelectProps } from "../../props/Select";
import { InputDefault } from "../../default/Input";
import { SpanDefault } from "../../default/Span";
import { BackgroundDefault, HBoxDefault, StyledInputDefault } from "../../default";

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
            editable: false,
            placeholder: this._props.placeholder,
            width: this._props.width,
            required: this._props.required
        });
        return input._input;
    }

    createOptionContainer(input: HTMLInputElement): HTMLDivElement {
        const optionContainer = document.createElement("div");
        optionContainer.classList.add("optionContainer");
        optionContainer.style.minWidth = `calc(${this._props.width ?? "100%"} - var(--half-padding) - 2px)`;

        if (this._props.searchable) {
            const searchbar = this.createSearchbar(optionContainer);
            optionContainer.appendChild(searchbar);
        }

        for (var i=0; i < this._props.options.length; i++) {
            const option = this.createOption(this._props.options[i], input);
            optionContainer.appendChild(option);
        }

        input.addEventListener("click", (_e) => {
            if (this._props.editable ?? true) {
                if (optionContainer.classList.contains("open")) {
                    optionContainer.classList.remove("open");
                } else {
                    optionContainer.classList.add("open");
                }
            }
        });

        return optionContainer;
    }

    createSearchbar(optionContainer: HTMLDivElement): HTMLDivElement {
        const search = new BackgroundDefault({
            src: "/glass.svg",
            width: "15px",
            height: "15px",
        });
        const searchbar = new StyledInputDefault({
            content: search._background,
            width: "300px"
        });
        searchbar._styledInput.addEventListener("change", (e) => {
            this.filterItems(optionContainer, (e.target as HTMLInputElement).value);
        });
        return searchbar._styledInput;
    }

    createOption(text: string, input: HTMLInputElement): HTMLDivElement {
        let children: HTMLElement[] = [];

        if (this._props.multiselect) {
            const checkbox = new InputDefault({
                variant: "checkbox",
                name: this._props.name,
                value: text
            });
            
            checkbox._input.addEventListener("change", (e: Event) => {
                if ((e.target as HTMLInputElement).checked) {
                    if (input.value.length > 0) {
                        input.value += `, ${text}`;
                    } else {
                        input.value = text;
                    }
                } else {
                    const values = input.value.split(", ");
                    const index = values.indexOf(text);
                    if (index > -1) {
                        values.splice(index, 1);
                    }
                    input.value = values.join(", ");
                }
            });

            if (this._props.selected?.split(",").includes(text)) {
                checkbox._input.checked = true;
                if (input.value.length > 0) {
                    input.value += `, ${text}`;
                } else {
                    input.value = text;
                }
            }

            children.push(checkbox._input);
        } else {
            const radio = new InputDefault({
                variant: "radio",
                name: this._props.name,
                value: text
            });

            radio._input.addEventListener("change", (_e: Event) => {
                input.value = text;
            });

            if (text === this._props.selected) {
                radio._input.checked = true;
                input.value = text;
            }

            children.push(radio._input);
        }

        const option = new SpanDefault(text);
        children.push(option._span);

        const optionGroup = new HBoxDefault({
            children: children
        });
        optionGroup._hBox.classList.add("option");
        return optionGroup._hBox;
    }

    filterItems(optionContainer: HTMLDivElement, filterKey: string): void {
        Array.from(optionContainer.children).forEach((child, idx) => {
            if (this._props.searchable && idx === 0) return;

            if ((child.children[0] as HTMLInputElement).value.toLowerCase().startsWith(filterKey.toLowerCase()))
                child.classList.remove("filter");
            else
                child.classList.add("filter");
        });
    }
}