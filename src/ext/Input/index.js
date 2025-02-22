import { InputBase } from "../../../base/index.js";
import { InputProps } from "../../../props/index.js";

export class Input extends InputBase {
    constructor(props = new InputProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }
}