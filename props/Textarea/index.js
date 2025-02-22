export class TextareaProps {
    constructor(value = "", lines = 3, editable = true, placeholder = "", width = "100%", resize = "both") {
        this.value = value;
        this.lines = lines;
        this.editable = editable;
        this.placeholder = placeholder;
        this.width = width;
        this.resize = resize;
    }
}