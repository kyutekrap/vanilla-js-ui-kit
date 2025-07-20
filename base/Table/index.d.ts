import { TableProps } from "../../props/Table";
import { TableFactory } from "../../factory/Table";
export declare abstract class TableBase extends TableFactory {
    _tableContainer: HTMLDivElement;
    _table: HTMLTableElement;
    _headerSection: HTMLTableSectionElement;
    _rowSection: HTMLTableSectionElement;
    constructor(props: TableProps);
    abstract onSort(th: HTMLTableCellElement, index: number): void;
    abstract getSelectedRows(): number[];
    abstract addData(data: Record<string, any>[]): void;
    abstract replaceData(data: Record<string, any>[]): void;
    abstract rearrangeHeader(columns: string[]): void;
    abstract sort(columnIdx: number, direction: "asc" | "desc"): void;
    _onSort(th: HTMLTableCellElement, index: number): void;
    _getSelectedRows(): number[];
    _addData(data: Record<string, any>[]): void;
    _replaceData(data: Record<string, any>[]): void;
    _rearrangeHeader(columns: string[]): void;
    _sort(columnIdx: number, direction: "asc" | "desc"): void;
}
