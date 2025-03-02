import { closeDrawer } from "./closeDrawer";
import { closeModal } from "./closeModal";
import { closeSnackbar } from "./closeSnackbar";
import { openDrawer } from "./openDrawer";
import { openModal } from "./openModal";
import { openSnackbar } from "./openSnackbar";
import { toggleDarkMode } from "./toggleDarkMode";

export class UI {

    static closeDrawer() {
        closeDrawer();
    }

    static closeModal() {
        closeModal();
    }

    static closeSnackbar() {
        closeSnackbar();
    }

    static openDrawer() {
        openDrawer();
    }

    static openModal(...args: Node[]) {
        openModal(args);
    }

    static openSnackbar(text: string) {
        openSnackbar(text);
    }

    static toggleDarkMode() {
        toggleDarkMode();
    }
}