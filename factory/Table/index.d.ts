import { TableProps } from "../../props/Table";
export declare class Sorter {
    column: number | undefined;
    direction: "asc" | "desc" | undefined;
}
export declare class TableFactory {
    _props: TableProps;
    _sorter: Sorter | undefined;
    constructor(props: TableProps);
    createTableContainer(): HTMLDivElement;
    createTable(container: HTMLDivElement): HTMLTableElement;
    createHeaderSection(table: HTMLTableElement): HTMLTableSectionElement;
    createHeader(table: HTMLTableElement, thead: HTMLTableSectionElement): HTMLTableSectionElement;
    createRowSection(table: HTMLTableElement): HTMLTableSectionElement;
    createRow(index: number): HTMLTableRowElement;
    createCell(content: string): HTMLTableCellElement;
    rearrangeHeaders(table: HTMLTableElement, columns: string[]): void;
    selectAllCheckboxes(table: HTMLTableElement, target: HTMLInputElement): void;
    getSelectedRows(table: HTMLTableElement): number[];
    enableResizing(table: HTMLTableElement): void;
    enableSorting(thead: HTMLTableSectionElement, sorter: Sorter): void;
    onSort(th: HTMLTableCellElement, index: number, thead: HTMLTableSectionElement, sorter: Sorter): void;
    resort(thead: HTMLTableSectionElement, sorter: Sorter): void;
    resetSorter(thead: HTMLTableSectionElement, sorter: Sorter): void;
    isExhausted(tableContainer: HTMLDivElement): boolean;
}
