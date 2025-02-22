import { TextareaBase } from "../../../base/index.js";
import { TextareaProps } from "../../../props/index.js";

export class Textarea extends TextareaBase {
    constructor(props = new TextareaProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }
}