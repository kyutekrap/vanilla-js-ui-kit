import { TableProps } from "../../props/Table";
export declare class TableFactory {
    _props: TableProps;
    _columnWidths: string[];
    _checkboxes: HTMLInputElement[];
    _activeIndex: number | null;
    _filterCol: string;
    _filterDir: 1 | -1;
    _table: HTMLDivElement | undefined;
    _container: HTMLDivElement | undefined;
    constructor(props: TableProps);
    createTable(): HTMLDivElement;
    getColumnWidths(): string[];
    createContainer(): HTMLDivElement;
    createCheckBoxColumn(): {
        checkboxInput: HTMLInputElement;
        checkboxColumn: HTMLDivElement;
    };
    createColumnLink(i: number): HTMLSpanElement;
    sortHandler(filterCol: string): void;
    createColumnBorder(i: number): HTMLDivElement;
    handleMouseDown(event: MouseEvent): void;
    handleMouseMove: (event: MouseEvent) => void;
    handleMouseUp: (e: MouseEvent) => void;
    createColumns(container: HTMLDivElement): HTMLDivElement;
    createRows(container: HTMLDivElement, data?: Record<string, any>[]): HTMLDivElement;
}
