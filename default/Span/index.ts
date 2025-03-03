import { SpanBase } from "../../base/Span";

export class SpanDefault extends SpanBase {
    constructor(text = "") {
        super(text);
    }
}