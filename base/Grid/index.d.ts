import { GridProps } from "../../props";
declare class Factory {
    _props: GridProps;
    constructor(props: GridProps);
    createGrid(): HTMLDivElement;
}
export declare abstract class GridBase extends Factory {
    _grid: HTMLDivElement;
    constructor(props: GridProps);
}
export {};
