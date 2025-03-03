import { GridProps } from "../../props/Grid";

export class GridFactory {

    _props: GridProps;

    constructor(props: GridProps) {
        this._props = props;
    }

    createGrid(): HTMLDivElement {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        for (var i = 0; i < this._props.children.length; i++) {
            grid.appendChild(this._props.children[i]);
        }
        grid.style.setProperty('--grid-columns', this._props.columns);
        return grid;
    }
}