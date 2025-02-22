import { LineProps } from "../../props/index.js";

export class LineBase {

    _line;

    constructor(props = new LineProps()) {
        
    }

    initialize() {
        this._line = document.createElement("div");
        this._line.classList.add("line");
    }
}