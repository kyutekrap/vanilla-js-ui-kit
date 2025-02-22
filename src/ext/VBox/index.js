import { VBoxBase } from "../../../base/index.js";
import { VBoxProps } from "../../../props/index.js";

export class VBox extends VBoxBase {
    constructor(props = new VBoxProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }
}