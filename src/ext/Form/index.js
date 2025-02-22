import { FormBase } from "vanilla-js-ui-kit";
import { FormProps } from "vanilla-js-ui-kit/props";

export class Form extends FormBase {
    constructor(props = new FormProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }

    onSubmit() {
        super.onSubmit();
    }
}