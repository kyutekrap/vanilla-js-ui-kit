import { GridProps } from "../../props";

class Factory {

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

export class GridBase extends Factory {

    _grid: HTMLDivElement;

    constructor(props: GridProps) {
        super(props);
        this._grid = super.createGrid();
    }
}