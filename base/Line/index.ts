import { LineProps } from "../../props/Line";

export abstract class LineBase {

    _line: HTMLDivElement;

    constructor(props: LineProps = {}) {
        this._line = document.createElement("div");
        this._line.classList.add("line");
    }
}