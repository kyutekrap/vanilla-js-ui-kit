import { TableBase } from "../../base/Table";
import { TableProps } from "../../props/Table";
export declare class TableDefault extends TableBase {
    constructor(props: TableProps);
    fillData(data: Record<string, any>[], columns: string[]): void;
    onSort(th: HTMLTableCellElement, index: number): void;
    getSelectedRows(): number[];
    addData(data: Record<string, any>[]): void;
    resetData(): void;
    rearrangeHeader(columns: string[]): void;
    sort(columnIdx: number, direction: "asc" | "desc"): void;
}
