import { toggleDarkMode } from "../../util";
import { AppBarDefault, BackgroundDefault, DrawerDefault, FlexBoxDefault, LoaderDefault, ModalDefault, SectionDefault, SnackbarDefault, StyledInputDefault } from "../../default";
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
            width: "22px",
            height: "22px",
            badge: "1"
        });
        const appbar = new AppBarDefault({
            children: [
                menuBtn._bgButton,
                flexBox._flexBox,
                profileBtn._bgButton
            ]
        });
        const search = new BackgroundDefault({
            src: "/glass.svg",
            width: "15px",
            height: "15px",
        });
        const input = new StyledInputDefault({
            content: search._background,
            width: "300px"
        });
        new DrawerDefault({ children: [
            input._styledInput
        ] });
        return appbar._appBar;
    }

    createCanvas(nodes: Node[]) {
        const section = new SectionDefault({
            children: nodes
        });
        section._section.style.minHeight = "calc(100vh - 90px)";
    }
}