import { GridProps } from "../../props/Grid";
import { GridFactory } from "../../factory/Grid";
export declare abstract class GridBase extends GridFactory {
    _grid: HTMLDivElement;
    constructor(props: GridProps);
}
