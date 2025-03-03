import { InputDefault, SpanDefault, VBoxDefault } from "../../default";
import { TableProps } from "../../props";

class Factory {

    _props: TableProps;
    _columnWidths: string[];
    _checkboxes: HTMLInputElement[];
    _activeIndex: number | null;
    _filterCol: string;
    _filterDir: 1 | -1;
    _table: HTMLDivElement | undefined;
    _container: HTMLDivElement | undefined;

    constructor(props: TableProps) {
        this._props = props;
        this._columnWidths = this.getColumnWidths();
        this._checkboxes = [];
        this._activeIndex = null;
        this._filterCol = '';
        this._filterDir = 1;
    }

    createTable(): HTMLDivElement {
        const table = new VBoxDefault();
        table._vBox.classList.add("table");
        this._table = table._vBox;
        return table._vBox;
    }

    getColumnWidths(): string[] {
        var containerWidth;
        if (!this._props.defaultWidth) {
            const rootStyles = getComputedStyle(document.documentElement);
            const defaultWidth = parseFloat(rootStyles.getPropertyValue("--section-width-default"));
            const mobileWidth = parseFloat(rootStyles.getPropertyValue("--section-width-mobile"));
            const percentage = window.matchMedia("(max-width: 768px)").matches ? mobileWidth : defaultWidth;
            containerWidth = window.innerWidth * percentage;
        } else {
            containerWidth = this._props.defaultWidth;
        }
        if (this._props.checkbox) {
            const dividedWidth = Math.round((containerWidth - 50) / this._props.columns.length - 15);
            const actualWidth = dividedWidth < 150 ? 150 : dividedWidth;
            return ['50px', ...Array(this._props.columns.length).fill(`${actualWidth}px`)];
        } else {
            const dividedWidth = Math.round(containerWidth / this._props.columns.length - 15);
            const actualWidth = dividedWidth < 150 ? 150 : dividedWidth;
            return Array(this._props.columns.length).fill(`${actualWidth}px`);
        }
    }

    createContainer(): HTMLDivElement {
        const innerGrid = document.createElement("div");
        innerGrid.classList.add("inner-grid");
        innerGrid.style.gridTemplateColumns = this._columnWidths.join(" ");
        this._container = innerGrid;
        return innerGrid;
    }

    createCheckBoxColumn(): { checkboxInput: HTMLInputElement, checkboxColumn: HTMLDivElement } {
        const checkboxColumn = document.createElement("div");
        checkboxColumn.classList.add("checkbox-column");
        const checkboxInput = new InputDefault({
            variant: "checkbox"
        });
        checkboxColumn.appendChild(checkboxInput._input);
        return { checkboxInput: checkboxInput._input, checkboxColumn: checkboxColumn };
    }

    createColumnLink(i: number): HTMLSpanElement {
        const columnLink = new SpanDefault(this._props.columns[i]);
        if (this._props.useAutoSort) {
            columnLink._span.style.cursor = "pointer";
            columnLink._span.addEventListener('click', (_) => {
                this.sortHandler(columnLink._span.textContent || '');
            });
            if (this._props.columns[i] === this._filterCol) {
                columnLink._span.classList.add("active");
                columnLink._span.innerHTML = `${columnLink._span.innerHTML} ${this._filterDir === 1 ? '↑' : '↓'}`;
            } else {
                columnLink._span.classList.remove("active");
                columnLink._span.innerHTML = this._props.columns[i];
            }
        }
        return columnLink._span;
    }

    sortHandler(filterCol: string) {
        if (this._filterCol === filterCol) {
            this._filterDir *= -1;
        } else {
            this._filterCol = filterCol;
            this._filterDir = 1;
        }
        const sortedData = this._props.data.sort((a, b) => {
            const valA = a[this._filterCol];
            const valB = b[this._filterCol];
            if (valA < valB) return -1 * this._filterDir;
            if (valA > valB) return 1 * this._filterDir;
            return 0;
        });
        if (this._table !== undefined) {
            const innerGrid = this._table.querySelector('.inner-grid') as HTMLDivElement;
            innerGrid.innerHTML = '';
            this.createColumns(innerGrid);
            this.createRows(innerGrid, sortedData);
        }
    }

    createColumnBorder(i: number): HTMLDivElement {
        const columnBorder = document.createElement("div");
        columnBorder.classList.add("column-border");
        columnBorder.dataset.index = i.toString();
        columnBorder.addEventListener("mousedown", (e) => this.handleMouseDown(e));
        return columnBorder;
    }

    handleMouseDown(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        const index = parseInt(target?.dataset.index || '0', 10) + (this._props.checkbox ? 1 : 0);
        this._activeIndex = index;
        document.addEventListener("mousemove", (e) => this.handleMouseMove(e));
        document.addEventListener("mouseup", this.handleMouseUp);
    }    

    handleMouseMove = (event: MouseEvent): void => {
        if (this._activeIndex !== null && this._container !== undefined) {
            const newWidth = event.clientX - this._container.getBoundingClientRect().left;
            const minWidth = 150;
            this._columnWidths[this._activeIndex] = `${Math.max(minWidth, newWidth)}px`;
            this._container.style.gridTemplateColumns = this._columnWidths.join(" ");
        }
    };

    handleMouseUp = (e: MouseEvent) => {
        this._activeIndex = null;
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
    };

    createColumns(container: HTMLDivElement): HTMLDivElement {
        for (var i=0; i < this._props.columns.length; i++) {
            if (i === 0 && this._props.checkbox) {
                const { checkboxInput, checkboxColumn } = this.createCheckBoxColumn();
                checkboxInput.addEventListener("change", (e) => {
                    for (var j=0; j<this._checkboxes.length; j++) {
                        this._checkboxes[j].checked = (e.target as HTMLInputElement).checked;
                    }
                });
                container.appendChild(checkboxColumn);
            }
            const column = document.createElement("div");
            column.classList.add("column");
            const columnLink = this.createColumnLink(i);
            column.appendChild(columnLink);
            const columnBorder = this.createColumnBorder(i);
            column.appendChild(columnBorder);
            container.appendChild(column);
        }
        return container;
    }

    createRows(container: HTMLDivElement, data: Record<string, any>[] = this._props.data) {
        for (var i=0; i < data.length; i++) {
            const keys = Object.keys(data[i]);
            for (var j=0; j < this._props.columns.length; j++) {
                const column = document.createElement("div");
                column.classList.add("column");
                if (j === 0 && this._props.checkbox) {
                    const { checkboxInput, checkboxColumn } = this.createCheckBoxColumn();
                    this._checkboxes.push(checkboxInput);
                    container.appendChild(checkboxColumn);
                }
                if (keys.includes(this._props.columns[j])) {
                    const span = new SpanDefault(data[i][this._props.columns[j]]);
                    span._span.classList.add("cell-span");
                    column.appendChild(span._span);
                } else {
                    const span = new SpanDefault("");
                    column.appendChild(span._span);
                }
                container.appendChild(column);
            }
        }
        return container;
    }
}

export abstract class TableBase extends Factory {

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