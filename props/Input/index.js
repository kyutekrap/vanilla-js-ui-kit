export class InputProps {
    constructor(variant = "text", editable = true, placeholder = "", value = "", width = "100%", name = "", required = false) {
        this.variant = variant;
        this.editable = editable;
        this.placeholder = placeholder;
        this.value = value;
        this.width = width;
        this.name = name;
        this.required = required;
    }
}