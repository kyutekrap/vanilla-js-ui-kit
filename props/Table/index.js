export class TableProps {
    constructor(columns = [], data = [], checkbox = false, useAutoSort = false, controls = null, defaultWidth = null) {
        this.columns = columns;
        this.data = data;
        this.checkbox = checkbox;
        this.useAutoSort = useAutoSort;
        this.controls = controls;
        this.defaultWidth = defaultWidth;
    }
}