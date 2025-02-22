export class GridBase extends Factory {
    _grid: any;
    initialize(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createGrid(): HTMLDivElement;
}
export {};
