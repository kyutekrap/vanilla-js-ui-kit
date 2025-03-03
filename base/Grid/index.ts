import { GridProps } from "../../props/Grid";
import { GridFactory } from "../../factory/Grid";

export abstract class GridBase extends GridFactory {

    _grid: HTMLDivElement;

    constructor(props: GridProps) {
        super(props);
        this._grid = super.createGrid();
    }
}