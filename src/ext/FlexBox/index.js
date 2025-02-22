import { FlexBoxBase } from "../../../base/index.js";
import { FlexBoxProps } from "../../../props/index.js";

export class FlexBox extends FlexBoxBase {
    constructor(props = new FlexBoxProps()) {
        super(props);
        this.initialize();
    }

    initialize() {
        super.initialize();
    }
}