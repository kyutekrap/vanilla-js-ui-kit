import { LineBase } from "../../../base/index.js";
import { LineProps } from "../../../props/index.js";

export class Line extends LineBase {
    constructor(props = new LineProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }
}