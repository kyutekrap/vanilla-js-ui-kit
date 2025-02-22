export class TableBase extends Factory {
    _table: any;
    _container: any;
    initialize(): void;
}
declare class Factory {
    constructor(parent: any);
    _columnWidths: any[];
    _checkboxes: any[];
    _activeIndex: any;
    _filterCol: any;
    _filterDir: any;
    parent: any;
    getColumnWidths(): any[];
    createContainer(): HTMLDivElement;
    createCheckBoxColumn(): {
        checkboxInput: Input;
        checkboxColumn: HTMLDivElement;
    };
    createColumnLink(): any;
    sortHandler(filterCol: any): void;
    createColumnBorder(container: any): HTMLDivElement;
    handleMouseDown(event: any, innerGrid: any): void;
    handleMouseMove: (event: any, innerGrid: any) => void;
    handleMouseUp: (e: any) => void;
    createColumns(container: any): any;
    createRows(container: any, data?: any): any;
}
import { InputBase as Input } from "../Input/index.js";
export {};
