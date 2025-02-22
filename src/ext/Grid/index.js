import { GridBase } from "../../../base/index.js";
import { GridProps } from "../../../props/index.js";

export class Grid extends GridBase {
    constructor(props = new GridProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }
}