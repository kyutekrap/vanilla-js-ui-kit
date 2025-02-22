import { SelectProps } from "../../props/index.js";
import { InputBase as Input } from "../Input/index.js";
import { SpanBase as Span } from "../Span/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createSelect() {
        const select = document.createElement("div");
        select.classList.add("select");
        return select;
    }

    createInput() {
        const input = new Input({
            variant: "text",
            editable: this.parent.editable,
            placeholder: this.parent.placeholder,
            content: this.parent.selected,
            width: this.parent.width,
            name: this.parent.name,
            required: this.parent.required
        });
        input.initialize();
        return input._input;
    }

    createOptionContainer(input) {
        const optionContainer = document.createElement("div");
        optionContainer.classList.add("optionContainer");
        for (var i=0; i < this.parent.options.length; i++) {
            const option = new Span(this.parent.options[i]);
            option.initialize();
            option._span.classList.add("option");
            option._span.addEventListener("click", (e) => {
                input.value = e.target.innerHTML;
                this.filterItems(optionContainer, e.target.innerHTML);
            });
            optionContainer.appendChild(option._span);
        }
        optionContainer.style.width = `calc(${width} - var(--half-padding) - 2px)`;
    }

    filterItems(optionContainer, filterKey) {
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

    _select;
    _input;
    _optionContainer;

    constructor(props = new SelectProps()) {
        super({...new SelectProps(), ...props})
    }

    initialize() {
        this._select = super.createSelect();
        this._input = super.createInput();
        this._select.appendChild(this._input);
        this._optionContainer = super.createOptionContainer(this._input);
        this._select.appendChild(this._optionContainer);
    }

    onChange() {
        this._input.addEventListener("change", (e) => {
            this.filterItems(this._optionContainer, e.target.value);
        });
    }

    onFocus() {
        this._input.addEventListener("focus", (_) => {
            optionContainer.classList.add("open");
        });
    }

    onFocusOut() {
        document.addEventListener("click", (e) => {
            if (e.target !== this._input) {
                this._optionContainer.classList.remove("open");
                if (!super.parent.options.includes(this._input.value)) {
                    this._input.value = "";
                }
            }
        });
    }
}