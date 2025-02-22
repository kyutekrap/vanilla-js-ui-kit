import { FormBase } from "../../../base/index.js";
import { FormProps } from "../../../props/index.js";

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