import { toggleDarkMode } from "../../util";
import { AppBarDefault, DrawerDefault, FlexBoxDefault, LoaderDefault, ModalDefault, SectionDefault, SnackbarDefault } from "../../default";
import { DrawerButton } from "./ext/DrawerButton.BgButtonExt";
import { ProfileButton } from "./ext/ProfileButton.BgButtonExt";

export class Canvas {

    constructor() {
        this.toggleDarkMode();
        this.createTemplate();
        this.createAppBar();
    }

    toggleDarkMode() {
        toggleDarkMode();
    }

    createTemplate() {
        new SnackbarDefault();
        new ModalDefault();
        new LoaderDefault();
    }

    createAppBar() {
        const menuBtn = new DrawerButton({
            src: "/menu.svg",
            rounded: true,
            width: "25px",
            height: "25px"
        });
        const flexBox = new FlexBoxDefault({
            flexGrow: 1
        });
        const profileBtn = new ProfileButton({
            src: "/profile.svg",
            rounded: true,
            width: "27px",
            height: "27px"
        });
        const appbar = new AppBarDefault({
            children: [
                menuBtn._bgButton,
                flexBox._flexBox,
                profileBtn._bgButton
            ]
        });
        new DrawerDefault({ children: [] });
        return appbar._appBar;
    }

    createCanvas(nodes: Node[]) {
        const section = new SectionDefault({
            children: nodes
        });
        section._section.style.minHeight = "calc(100vh - 90px)";
    }
}