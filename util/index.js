import { closeDrawer } from "./closeDrawer/index.js";
import { closeModal } from "./closeModal/index.js";
import { closeSnackbar } from "./closeSnackbar/index.js";
import { openDrawer } from "./openDrawer/index.js";
import { openModal } from "./openModal/index.js";
import { openSnackbar } from "./openSnackbar/index.js";
import { toggleDarkMode } from "./toggleDarkMode/index.js";

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

    static openModal(...args) {
        openModal(args);
    }

    static openSnackbar(text) {
        openSnackbar(text);
    }

    static toggleDarkMode() {
        toggleDarkMode();
    }
}