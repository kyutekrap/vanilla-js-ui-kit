import { TableProps } from "../../props/Table";
import { TableFactory } from "../../factory/Table";

export abstract class TableBase extends TableFactory {

    _table: HTMLDivElement;
    _container: HTMLDivElement;

    constructor(props: TableProps) {
        super(props);
        this._table = super.createTable();
        this._container = super.createContainer();
        this._container = super.createColumns(this._container);
        this._container = super.createRows(this._container);
        this._table.appendChild(this._container);
        if (props.controls) this._table.appendChild(props.controls);
    }
}