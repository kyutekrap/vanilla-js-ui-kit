import { InputDefault } from "../../default/Input";
import { StyledInputProps } from "../../props/StyledInput";

export class StyledInputFactory {

    _props: StyledInputProps;

    constructor(props: StyledInputProps) {
        this._props = props;
    }

    createContainer(): HTMLDivElement {
        const container = document.createElement("div");
        container.classList.add("styledInput");
        container.classList.add(this._props.position ?? "left");
        container.style.width = this._props.width ?? "100%";
        return container;
    }

    createStyledInputContent(): HTMLDivElement {
        const content = document.createElement("div");
        content.appendChild(this._props.content);
        content.classList.add("styledInputContent");
        content.classList.add(this._props.position ?? "left");
        return content;
    }

    createInput(): HTMLInputElement {
        const input = new InputDefault({
            variant: this._props.variant ?? "text",
            editable: this._props.editable ?? true,
            placeholder: this._props.placeholder ?? "",
            value: this._props.value ?? "",
            name: this._props.name ?? "",
            required: this._props.required ?? false
        });
        return input._input;
    }
}