import { TableDefault, AccordionDefault, FormDefault, InputDefault, SmallDefault, VBoxDefault, SelectDefault } from "../../default";
import { data } from "./data";

export class Home {

    initialize(): Node[] {
        return [
            this.createForm(),
            this.createAccordion()
        ];
    }

    createForm() {
        const form = new FormDefault({
            layout: "horizontal",
            children: [
                this.createTextInput("First Name"),
                this.createTextInput("Last Name"),
                this.createDropdown("Country", ["USA", "Canada", "Mexico"])
            ]
        });
        return form._form;
    }

    createTextInput(strLabel: string) {
        const label = new SmallDefault(strLabel);
        const input = new InputDefault({});
        const inputContainer = new VBoxDefault({
            children: [
                label._small,
                input._input
            ]
        });
        return inputContainer._vBox;
    }

    createDropdown(strLabel: string, options: string[]) {
        const label = new SmallDefault(strLabel);
        const select = new SelectDefault({
            options: options,
            multiselect: false,
            searchable: true,
            name: "country"
        });
        const inputContainer = new VBoxDefault({
            children: [
                label._small,
                select._select
            ]
        });
        return inputContainer._vBox;
    }

    createAccordion() {
        const accordion = new AccordionDefault({
            caption: "Data Table",
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