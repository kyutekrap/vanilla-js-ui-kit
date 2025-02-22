import { AppBarBase } from "../../../base/index.js";
import { AppBarProps } from "../../../props/index.js";

export class AppBar extends AppBarBase {
    constructor(props = new AppBarProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }
}