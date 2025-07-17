import { UI } from "../../util";
import { DrawerButton } from "./ext/DrawerButton.BgButtonExt";
import { ProfileButton } from "./ext/ProfileButton.BgButtonExt";
import { AppBarDefault, FlexBoxDefault, SmallDefault, SnackbarDefault, SubHeaderDefault, TableDefault, SectionDefault, ModalDefault, FooterDefault, DrawerDefault, AccordionDefault, TextareaDefault, FileInputDefault, LinkDefault, BgButtonDefault, SelectDefault, SearchDefault } from "../../default";

export class Home {
    constructor() {
        this.toggleDarkMode();
        this.createTemplate();
        this.createAppBar();
        this.createSection(
            this.createAccordion()
        );
        this.createFooter();
    }

    toggleDarkMode() {
        UI.toggleDarkMode();
    }

    createTemplate() {
        new SnackbarDefault();
        new ModalDefault();
    }

    createAppBar() {
        const menuBtn = new DrawerButton({
            src: "/menu.svg",
            rounded: true,
            width: "25px",
            height: "25px"
        });
        const subHeader = new SubHeaderDefault("My App");
        const flexBox = new FlexBoxDefault({
            flexGrow: 1
        });
        const profileBtn = new ProfileButton({
            src: "/profile.svg",
            rounded: true,
            width: "27px",
            height: "27px"
        });
        new AppBarDefault({
            children: [
                menuBtn._bgButton,
                subHeader._subHeader,
                flexBox._flexBox,
                profileBtn._bgButton
            ]
        });
        new DrawerDefault({ children: [
            new SearchDefault({
                width: "calc(100%} - var(--padding))"
            })._search
        ] });
    }

    createSection(...args: Node[]) {
        new SectionDefault({
            children: args
        });
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
            ]
        });
        return table._table;
    }

    createFooter() {
        const copyright = new SmallDefault("Created by Kyutekrap");
        new FooterDefault({
            children: [copyright._small]
        });
    }
}