import { TextareaBase } from "vanilla-js-ui-kit";
import { TextareaProps } from "vanilla-js-ui-kit/props";

export class Textarea extends TextareaBase {
    constructor(props = new TextareaProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }
}