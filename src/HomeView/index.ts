import { TableDefault, AccordionDefault, StyledInputDefault, BackgroundDefault } from "../../default";
import { data } from "./data";

export class Home {

    initialize(): Node[] {
        return [
            this.createSearchbar(),
            this.createAccordion()
        ];
    }

    createSearchbar() {
        const search = new BackgroundDefault({
            src: "/glass.svg",
            width: "15px",
            height: "15px",
        });
        const input = new StyledInputDefault({
            content: search._background,
            width: "300px"
        });
        return input._styledInput;
    }

    createAccordion() {
        const accordion = new AccordionDefault({
            caption: "Check out my table.",
            children: [
                this.createTable()
            ]
        });
        return accordion._accordion;
    }

    createTable() {
        const table = new TableDefault({
            columns: ["Column 1", "Column 2", "Column 3"],
            data: data,
            resizable: true,
            checkbox: true,
            sortable: true
        });
        return table._tableContainer;
    }
}