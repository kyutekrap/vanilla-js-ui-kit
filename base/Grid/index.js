import { GridProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createGrid() {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        for (var i = 0; i < this.parent.children.length; i++) {
            grid.appendChild(this.parent.children[i]);
        }
        grid.style.setProperty('--grid-columns', this.parent.columns);
        return grid;
    }
}

export class GridBase extends Factory {

    _grid;

    constructor(props = new GridProps()) {
        super({...new GridProps(), ...props})
    }

    initialize() {
        this._grid = super.createGrid();
    }
}