export class FileInputProps {
    constructor(value = "", editable = true, placeholder = "", width = "100%", name = "", required = false, multiselect = false, accept = ".jpg,.png,.pdf", size = 1) {
        this.value = value;
        this.editable = editable;
        this.placeholder = placeholder;
        this.width = width;
        this.name = name;
        this.required = required;
        this.multiselect = multiselect;
        this.accept = accept;
        this.size = size;
    }
}