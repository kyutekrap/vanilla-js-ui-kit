import { UI } from "../../../util/index.js";
import { AppBar, BgButton, FlexBox, Small, Snackbar, SubHeader, Table, Section, Modal, Footer } from "../../ext/index.js";

export class Home {
    constructor() {
        this.toggleDarkMode();
        this.createTemplate();
        this.createAppBar();
        this.createFooter();
    }

    toggleDarkMode() {
        UI.toggleDarkMode();
    }

    createTemplate() {
        new Snackbar();
        new Modal();
    }

    createAppBar() {
        const menuBtn = new BgButton({
            src: "/menu.svg",
            rounded: true,
            width: "25px",
            height: "25px"
        });
        const subHeader = new SubHeader("My App");
        const flexBox = new FlexBox({
            flexGrow: 1
        });
        const profileBtn = new BgButton({
            src: "/profile.svg",
            rounded: true,
            width: "27px",
            height: "27px"
        });
        new AppBar({
            children: [
                menuBtn._bgButton,
                subHeader._subHeader,
                flexBox._flexBox,
                profileBtn._bgButton
            ]
        })
    }

    createTable() {
        const table = new Table({
            columns: ["Column 1", "Column 2", "Column 3"],
            data: [
                {
                    "Column 1": "Value 1", 
                    "Column 2": "Value 2",
                    "Column 3": "Value 2"
                },
                {
                    "Column 1": "Value 1", 
                    "Column 2": "Value 2",
                    "Column 3": "Value 2"
                },
                {
                    "Column 1": "Value 1", 
                    "Column 2": "Value 2",
                    "Column 3": "Value 2"
                }
            ],
            checkbox: true,
            useAutoSort: true
        });
        new Section({
            children: [
                table._table
            ]
        });
    }

    createFooter() {
        const copyright = new Small("Created by Kyutekrap");
        new Footer({
            children: [copyright._small]
        });
    }
}