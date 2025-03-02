import { TableProps } from "../../props";
import { InputBase as Input } from "../Input";
import { SpanBase as Span } from "../Span";
import { VBoxBase as VBox } from "../VBox";

// TODO
class Factory {

    _props: TableProps;
    _columnWidths: string[];
    _checkboxes;
    _activeIndex;
    _filterCol;
    _filterDir;

    constructor(props: TableProps) {
        this._props = props;
        this._columnWidths = this.getColumnWidths();
        this._checkboxes = [];
    }

    getColumnWidths(): string[] {
        var containerWidth = this._props.defaultWidth;
        if (!this._props.defaultWidth) {
            const rootStyles = getComputedStyle(document.documentElement);
            const defaultWidth = parseFloat(rootStyles.getPropertyValue("--section-width-default"));
            const mobileWidth = parseFloat(rootStyles.getPropertyValue("--section-width-mobile"));
            const percentage = window.matchMedia("(max-width: 768px)").matches ? mobileWidth : defaultWidth;
            containerWidth = window.innerWidth * percentage;
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
        return innerGrid;
    }

    createCheckBoxColumn(): { checkBoxInput: Input, checkboxColumn: HTMLDivElement } {
        const checkboxColumn = document.createElement("div");
        checkboxColumn.classList.add("checkbox-column");
        const checkboxInput = new Input({
            variant: "checkbox"
        });
        checkboxInput.initialize();
        checkboxColumn.appendChild(checkboxInput._input);
        return { checkboxInput, checkboxColumn };
    }

    createColumnLink(): HTMLSpanElement {
        const columnLink = new Span(this._props.columns[i]);
        columnLink.initialize();
        if (this._props.useAutoSort) {
            columnLink._span.style.cursor = "pointer";
            columnLink._span.addEventListener('click', (_) => {
                this.sortHandler(columnLink._span.textContent);
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
        const sortedData = this._data.sort((a, b) => {
            const valA = a[this._filterCol];
            const valB = b[this._filterCol];
            if (valA < valB) return -1 * this._filterDir;
            if (valA > valB) return 1 * this._filterDir;
            return 0;
        });
        const innerGrid = this._table.querySelector('.inner-grid');
        innerGrid.innerHTML = '';
        this.createColumns(innerGrid);
        this.createRows(innerGrid, sortedData);
    }

    createColumnBorder(container) {
        const columnBorder = document.createElement("div");
        columnBorder.classList.add("column-border");
        columnBorder.dataset.index = i;
        columnBorder.addEventListener("mousedown", (e) => this.handleMouseDown(e, container));
        return columnBorder;
    }

    handleMouseDown(event, innerGrid) {
        const index = parseInt(event.target.dataset.index, 10) + this._props.checkbox ? 1 : 0;
        this._activeIndex = index;
        document.addEventListener("mousemove", (e) => this.handleMouseMove(e, innerGrid));
        document.addEventListener("mouseup", (e) => this.handleMouseUp(e));
    }

    handleMouseMove = (event, innerGrid) => {
        if (this._activeIndex !== null) {
            const newWidth = event.clientX - this._props.getBoundingClientRect().left;
            const minWidth = 150;
            this._columnWidths[this._activeIndex] = `${Math.max(minWidth, newWidth)}px`;
            innerGrid.style.gridTemplateColumns = this._columnWidths.join(" ");
        }
    };

    handleMouseUp = (e: MouseEvent) => {
        this._activeIndex = null;
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
    };

    createColumns(container) {
        for (var i=0; i < this._props.columns.length; i++) {
            if (i === 0 && this._props.checkbox) {
                const { checkboxInput, checkboxColumn } = this.createCheckBoxColumn();
                checkboxInput._input.addEventListener("change", (e) => {
                    for (var j=0; j<this._checkboxes.length; j++) {
                        this._checkboxes[j].checked = e.target.checked;
                    }
                });
                container.appendChild(checkboxColumn);
            }
            const column = document.createElement("div");
            column.classList.add("column");
            const columnLink = this.createColumnLink();
            column.appendChild(columnLink);
            const columnBorder = this.createColumnBorder(container);
            column.appendChild(columnBorder);
            container.appendChild(column);
        }
        return container;
    }

    createRows(container, data = this._props.data) {
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
                    const span = new Span(data[i][this._props.columns[j]]);
                    span._span.classList.add("cell-span");
                    column.appendChild(span._span);
                } else {
                    const span = new Span("");
                    column.appendChild(span._span);
                }
                container.appendChild(column);
            }
        }
        return container;
    }
}

export class TableBase extends Factory {

    _table: HTMLDivElement;
    _container;

    constructor(props: TableProps) {
        super(props);
        const table = new VBox();
        this._table = table._vBox;
        this._table.classList.add("table");
        this._container = super.createContainer();
        this._container = super.createColumns(this._container);
        this._container = super.createRows(this._container);
        this._table.appendChild(this._container);
        if (super._props.controls) this._table.appendChild(super._props.controls);
    }
}