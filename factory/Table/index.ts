import { InputDefault } from "../../default/Input";
import { TableProps } from "../../props/Table";

export class Sorter {
    column: number | undefined = undefined;
    direction: "asc" | "desc" | undefined = undefined;
}

export class TableFactory {

    _props: TableProps;
    _sorter: Sorter | undefined;

    constructor(props: TableProps) {
        this._props = props;
        if (this._props.sortable ?? true) {
            this._sorter = new Sorter();
        }
    }

    createTableContainer(): HTMLDivElement {
        const container = document.createElement("div");
        container.classList.add("table-container");
        return container;
    }

    createTable(container: HTMLDivElement): HTMLTableElement {
        const table = document.createElement("table");
        table.classList.add("table");
        container.appendChild(table);
        return table;
    }

    createHeaderSection(table: HTMLTableElement): HTMLTableSectionElement {
        const thead = document.createElement("thead");
        table.appendChild(thead);
        return thead;
    }

    createHeader(table: HTMLTableElement, thead: HTMLTableSectionElement): HTMLTableSectionElement {
        const tr = document.createElement("tr");
        if (this._props.checkbox) {
            const th = document.createElement("th");
            const checkbox = new InputDefault({
                variant: "checkbox"
            });
            checkbox._input.addEventListener("change", (e) => {
                this.selectAllCheckboxes(table, e.target as HTMLInputElement);
            });
            th.appendChild(checkbox._input);
            th.classList.add("checkbox-cell");
            tr.appendChild(th);
        }
        this._props.columns.forEach(column => {
            const th = document.createElement("th");
            th.textContent = column;
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        return thead;
    }

    createRowSection(table: HTMLTableElement): HTMLTableSectionElement {
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);
        return tbody;
    }

    createRows(tbody: HTMLTableSectionElement): HTMLTableSectionElement {
        this._props.data.forEach((rowData, index) => {
            const tr = document.createElement("tr");
            if (this._props.checkbox) {
                const td = document.createElement("td");
                const checkbox = new InputDefault({
                    variant: "checkbox",
                    name: index.toString()
                });
                td.appendChild(checkbox._input);
                td.classList.add("checkbox-cell");
                tr.appendChild(td);
            }
            this._props.columns.forEach(column => {
                const td = document.createElement("td");
                td.textContent = rowData[column] || "";
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        return tbody;
    }

    replaceRows(table: HTMLTableElement, data: Record<string, any>[] | undefined): void {
        if (data) this._props.data = data;
        const tbody = table.querySelector("tbody");
        const newTbody = document.createElement("tbody");
        tbody?.replaceWith(this.createRows(newTbody));
    }

    rearrangeHeaders(table: HTMLTableElement, columns: string[]): void {
        this._props.columns = columns;
        const thead = table.querySelector("thead");
        const newThead = document.createElement("thead");
        thead?.replaceWith(this.createHeader(table, newThead));
        this.replaceRows(table, this._props.data);
    }

    selectAllCheckboxes(table: HTMLTableElement, target: HTMLInputElement): void {
        const checkboxes = table.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(checkbox => {
            (checkbox as HTMLInputElement).checked = target.checked;
        });
    }

    getSelectedRows(table: HTMLTableElement): number[] {
        const selectedRows: number[] = [];
        const checkboxes = table.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(checkbox => {
            if ((checkbox as HTMLInputElement).checked) {
                selectedRows.push(parseInt((checkbox as HTMLInputElement).name));
            }
        });
        return selectedRows;
    }

    enableResizing(table: HTMLTableElement): void {
        const thElements = table.querySelectorAll("th");

        thElements.forEach((th, index) => {
            if (this._props.checkbox && index === 0) return;

            const resizer = document.createElement("div");
            resizer.classList.add("resizer");
            th.appendChild(resizer);

            let startX: number, startWidth: number;

            resizer.addEventListener("mousedown", (e: MouseEvent) => {
                startX = e.pageX;
                startWidth = th.offsetWidth;

                const onMouseMove = (e: MouseEvent) => {
                    const newWidth = startWidth + (e.pageX - startX);
                    th.style.width = `${newWidth}px`;

                    table.querySelectorAll("tr").forEach(row => {
                        const cell = row.children[index] as HTMLElement;
                        if (cell && cell !== th) {
                            cell.style.width = `${newWidth}px`;
                        }
                    });
                };

                const onMouseUp = () => {
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseup", onMouseUp);
                };

                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
            });
        });
    }

    enableSorting(thead: HTMLTableSectionElement, sorter: Sorter): void {
        thead.querySelectorAll("th").forEach((th, index) => {
            this.onSort(th as HTMLTableCellElement, index, thead, sorter);
        });
    }

    onSort(th: HTMLTableCellElement, index: number, thead: HTMLTableSectionElement, sorter: Sorter): void {
        if (this._props.checkbox && index === 0) return;
        th.style.cursor = "pointer";
        th.addEventListener("click", () => {
            const actualIndex = index - (this._props.checkbox ? 1 : 0);
            if (actualIndex < 0) return;

            if (sorter.column === actualIndex) {
                sorter.direction = sorter.direction === "asc" ? "desc" : "asc";
            } else {
                sorter.column = actualIndex;
                sorter.direction = "asc";
            }

            this.resort(thead, sorter);
        });
    }

    resort(thead: HTMLTableSectionElement, sorter: Sorter): void {
        thead.querySelectorAll("th").forEach((_th, _index) => {
            const actualIndex = _index - (this._props.checkbox ? 1 : 0);

            if (actualIndex === sorter.column) _th.classList.add("active");
            else _th.classList.remove("active");
        });
        
        this._props.data.sort((a, b) => {
            const aValue = Object.values(a)[sorter.column as number];
            const bValue = Object.values(b)[sorter.column as number];
            if (aValue < bValue) return sorter.direction === "asc" ? -1 : 1;
            if (aValue > bValue) return sorter.direction === "asc" ? 1 : -1;
            return 0;
        });
        this.replaceRows(thead.parentElement as HTMLTableElement, this._props.data);
    }

    resetSorter(thead: HTMLTableSectionElement, sorter: Sorter): void {
        sorter.column = undefined;
        sorter.direction = undefined;
        thead.querySelectorAll("th").forEach(th => {
            th.classList.remove("active");
        });
    }

    isExhausted(tableContainer: HTMLDivElement): boolean {
        return tableContainer.scrollTop + tableContainer.clientHeight >= tableContainer.scrollHeight;
    }
}