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
        if (props.resizable ?? true) {
            this.enableResizing(this._table);
        }
        if (props.sortable ?? true) {
            this.enableSorting(this._headerSection, this._sorter as Sorter);
        }
    }

    // Fill data into table row section
    abstract fillData(data: Record<string, any>[], columns: string[]): void;

    // Custom Sorting logic when props.sortable is false
    abstract onSort(th: HTMLTableCellElement, index: number): void;

    // Get selected row indices when props.checkbox is true
    abstract getSelectedRows(): number[];

    // Add data to table when paging is required
    abstract addData(data: Record<string, any>[]): void;

    // Reset sorter and rows
    abstract resetData(): void;

    // Rearrange header column positions
    abstract rearrangeHeader(columns: string[]): void;

    // Programtically sort the table
    abstract sort(columnIdx: number, direction: "asc" | "desc"): void;

    _fillData(data: Record<string, any>[], columns: string[]): void {
        data.forEach((rowData, index) => {
            const tr = super.createRow(index);
            columns.forEach(column => {
                const td = super.createCell(rowData[column] || "");
                tr.appendChild(td);
            });
            this._rowSection.appendChild(tr);
        });
    }

    _onSort(th: HTMLTableCellElement, index: number): void {
        super.onSort(th, index, this._headerSection, this._sorter as Sorter);
    }

    _getSelectedRows(): number[] {
        return super.getSelectedRows(this._table);
    }

    _addData(data: Record<string, any>[]): void {
        this._props.data.push(...data);
    }

    _resetData(): void {
        super.resetSorter(this._headerSection, this._sorter as Sorter);
        const tbody = this._table.querySelector("tbody");
        this._rowSection = document.createElement("tbody");
        tbody?.replaceWith(this._rowSection);
    }

    _rearrangeHeader(columns: string[]): void {
        super.rearrangeHeaders(this._table, columns);
        this._resetData();
        this._fillData(this._props.data, columns);
    }

    _sort(columnIdx: number, direction: "asc" | "desc"): void {
        if (this._sorter) {
            this._sorter.column = columnIdx;
            this._sorter.direction = direction;
            super.resort(this._headerSection, this._sorter as Sorter);
            this._resetData();
            this._fillData(this._props.data, this._props.columns);
        }
    }
}