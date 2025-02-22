import { FileInputBase } from "../../../base/index.js";
import { FileInputProps } from "../../../props/index.js";

export class FileInput extends FileInputBase {
    constructor(props = new FileInputProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }

    onClick() {
        super.onClick();
    }

    onChange() {
        super.onChange();
    }
}