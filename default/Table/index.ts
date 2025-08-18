import { TableBase } from "../../base/Table";
import { TableProps } from "../../props/Table";

export class TableDefault extends TableBase {

    constructor(props: TableProps) {
        super(props);
        this.fillData(this._props.data, this._props.columns);
    }

    fillData(data: Record<string, any>[], columns: string[]): void {
        super._fillData(data, columns);
    }

    onSort(th: HTMLTableCellElement, index: number): void {
        super._onSort(th, index);
    }

    getSelectedRows(): number[] {
        return super._getSelectedRows();
    }

    addData(data: Record<string, any>[]): void {
        return super._addData(data);
    }

    resetData(): void {
        return super._resetData();
    }

    rearrangeHeader(columns: string[]): void {
        return super._rearrangeHeader(columns);
    }

    sort(columnIdx: number, direction: "asc" | "desc"): void {
        return super._sort(columnIdx, direction);
    }
}