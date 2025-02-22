export class SelectProps {
    constructor(options = [], selected = null, editable = true, placeholder = "", width = "100%", name = "", required = false) {
        this.options = options;
        this.selected = selected;
        this.editable = editable;
        this.placeholder = placeholder;
        this.width = width;
        this.name = name;
        this.required = required;
    }
}