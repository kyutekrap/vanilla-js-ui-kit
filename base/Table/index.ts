import { TableProps } from "../../props/Table";
import { Sorter, TableFactory } from "../../factory/Table";

export abstract class TableBase extends TableFactory {

    _tableContainer: HTMLDivElement;
    _table: HTMLTableElement;
    _headerSection: HTMLTableSectionElement;
    _rowSection: HTMLTableSectionElement;

    constructor(props: TableProps) {
        super(props);
        this._tableContainer = super.createTableContainer();
        this._table = super.createTable(this._tableContainer);
        this._headerSection = super.createHeaderSection(this._table);
        super.createHeader(this._table, this._headerSection);
        this._rowSection = super.createRowSection(this._table);
        super.createRows(this._rowSection);
        if (props.resizable ?? true) {
            this.enableResizing(this._table);
        }
        if (props.sortable ?? true) {
            this.enableSorting(this._headerSection, this._sorter as Sorter);
        }
    }

    // Custom Sorting logic when props.sortable is false
    abstract onSort(th: HTMLTableCellElement, index: number): void;

    // Get selected row indices when props.checkbox is true
    abstract getSelectedRows(): number[];

    // Add data to table when paging is required
    abstract addData(data: Record<string, any>[]): void;

    // Reset sorter and replace rows with new data
    abstract replaceData(data: Record<string, any>[]): void;

    // Rearrange header column positions
    abstract rearrangeHeader(columns: string[]): void;

    // Programtically sort the table
    abstract sort(columnIdx: number, direction: "asc" | "desc"): void;

    _onSort(th: HTMLTableCellElement, index: number): void {
        super.onSort(th, index, this._headerSection, this._sorter as Sorter);
    }

    _getSelectedRows(): number[] {
        return super.getSelectedRows(this._table);
    }

    _addData(data: Record<string, any>[]): void {
        this._props.data.push(...data);
    }

    _replaceData(data: Record<string, any>[]): void {
        super.resetSorter(this._headerSection, this._sorter as Sorter);
        super.replaceRows(this._table, data);
    }

    _rearrangeHeader(columns: string[]): void {
        super.resetSorter(this._headerSection, this._sorter as Sorter);
        super.rearrangeHeaders(this._table, columns);
    }

    _sort(columnIdx: number, direction: "asc" | "desc"): void {
        if (this._sorter) {
            this._sorter.column = columnIdx;
            this._sorter.direction = direction;
            super.resort(this._headerSection, this._sorter as Sorter);
        }
    }
}