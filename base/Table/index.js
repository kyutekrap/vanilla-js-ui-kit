import { TableProps } from "../../props/index.js";
import { InputBase as Input } from "../Input/index.js";
import { SpanBase as Span } from "../Span/index.js";
import { VBoxBase as VBox } from "../VBox/index.js";

class Factory {

    _columnWidths;
    _checkboxes;
    _activeIndex;
    _filterCol;
    _filterDir;

    constructor(parent) {
        this.parent = parent;
        this._columnWidths = this.getColumnWidths();
        this._checkboxes = [];
    }

    getColumnWidths() {
        var containerWidth = this.parent.defaultWidth;
        if (!this.parent.defaultWidth) {
            const rootStyles = getComputedStyle(document.documentElement);
            const defaultWidth = parseFloat(rootStyles.getPropertyValue("--section-width-default"));
            const mobileWidth = parseFloat(rootStyles.getPropertyValue("--section-width-mobile"));
            const percentage = window.matchMedia("(max-width: 768px)").matches ? mobileWidth : defaultWidth;
            containerWidth = window.innerWidth * percentage;
        }
        if (this.parent.checkbox) {
            const dividedWidth = Math.round((containerWidth - 50) / this.parent.columns.length - 15);
            const actualWidth = dividedWidth < 150 ? 150 : dividedWidth;
            return ['50px', ...Array(this.parent.columns.length).fill(`${actualWidth}px`)];
        } else {
            const dividedWidth = Math.round(containerWidth / this.parent.columns.length - 15);
            const actualWidth = dividedWidth < 150 ? 150 : dividedWidth;
            return Array(this.parent.columns.length).fill(`${actualWidth}px`);
        }
    }

    createContainer() {
        const innerGrid = document.createElement("div");
        innerGrid.classList.add("inner-grid");
        innerGrid.style.gridTemplateColumns = this._columnWidths.join(" ");
        return innerGrid;
    }

    createCheckBoxColumn() {
        const checkboxColumn = document.createElement("div");
        checkboxColumn.classList.add("checkbox-column");
        const checkboxInput = new Input({
            variant: "checkbox"
        });
        checkboxInput.initialize();
        checkboxColumn.appendChild(checkboxInput._input);
        return { checkboxInput, checkboxColumn };
    }

    createColumnLink() {
        const columnLink = new Span(this.parent.columns[i]);
        columnLink.initialize();
        if (this.parent.useAutoSort) {
            columnLink._span.style.cursor = "pointer";
            columnLink._span.addEventListener('click', (_) => {
                this.sortHandler(columnLink._span.textContent);
            });
            if (this.parent.columns[i] === this._filterCol) {
                columnLink._span.classList.add("active");
                columnLink._span.innerHTML = `${columnLink._span.innerHTML} ${this._filterDir === 1 ? '↑' : '↓'}`;
            } else {
                columnLink._span.classList.remove("active");
                columnLink._span.innerHTML = this.parent.columns[i];
            }
        }
        return columnLink._span;
    }

    sortHandler(filterCol) {
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
        innerGrid = this.createColumns(innerGrid);
        innerGrid = this.createRows(innerGrid, sortedData);
    }

    createColumnBorder(container) {
        const columnBorder = document.createElement("div");
        columnBorder.classList.add("column-border");
        columnBorder.dataset.index = i;
        columnBorder.addEventListener("mousedown", (e) => this.handleMouseDown(e, container));
        return columnBorder;
    }

    handleMouseDown(event, innerGrid) {
        const index = parseInt(event.target.dataset.index, 10) + this.parent.checkbox ? 1 : 0;
        this._activeIndex = index;
        document.addEventListener("mousemove", (e) => this.handleMouseMove(e, innerGrid));
        document.addEventListener("mouseup", (e) => this.handleMouseUp(e));
    }

    handleMouseMove = (event, innerGrid) => {
        if (this._activeIndex !== null) {
            const newWidth = event.clientX - this._table.getBoundingClientRect().left;
            const minWidth = 150;
            this._columnWidths[this._activeIndex] = `${Math.max(minWidth, newWidth)}px`;
            innerGrid.style.gridTemplateColumns = this._columnWidths.join(" ");
        }
    };

    handleMouseUp = (e) => {
        this._activeIndex = null;
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
    };

    createColumns(container) {
        for (var i=0; i < this.parent.columns.length; i++) {
            if (i === 0 && this.parent.checkbox) {
                const { checkboxInput, checkboxColumn } = this.createCheckBoxColumn();
                checkboxInput.addEventListener("change", (e) => {
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

    createRows(container, data = this.parent.data) {
        for (var i=0; i < data.length; i++) {
            const keys = Object.keys(data[i]);
            for (var j=0; j < this.parent.columns.length; j++) {
                const column = document.createElement("div");
                column.classList.add("column");
                if (j === 0 && this.parent.checkbox) {
                    const { checkboxInput, checkboxColumn } = this.createCheckBoxColumn();
                    this._checkboxes.push(checkboxInput);
                    container.appendChild(checkboxColumn);
                }
                if (keys.includes(this.parent.columns[j])) {
                    const span = new Span(data[i][this.parent.columns[j]]);
                    span.initialize();
                    span._span.classList.add("cell-span");
                    column.appendChild(span._span);
                } else {
                    const span = new Span("");
                    span.initialize();
                    column.appendChild(span._span);
                }
                container.appendChild(column);
            }
        }
        return container;
    }
}

export class TableBase extends Factory {

    _table;
    _container;

    constructor(props = new TableProps()) {
        super({...new TableProps(), ...props})
    }

    initialize() {
        this._table = new VBox();
        this._table.initialize();
        this._table = this._table._vBox;
        this._table.classList.add("table");
        this._container = super.createContainer();
        this._container = super.createColumns(this._container);
        this._container = super.createRows(this._container);
        this._table.appendChild(this._container);
        if (super.parent.controls) this._table.appendChild(super.parent.controls);
    }
}