import { TableBase } from "../../../base/index.js";
import { TableProps } from "../../../props/index.js";

export class Table extends TableBase {
    constructor(props = new TableProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }
}