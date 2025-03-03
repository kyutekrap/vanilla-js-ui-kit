import { TableProps } from "../../props/Table";
import { TableFactory } from "../../factory/Table";
export declare abstract class TableBase extends TableFactory {
    _table: HTMLDivElement;
    _container: HTMLDivElement;
    constructor(props: TableProps);
}
