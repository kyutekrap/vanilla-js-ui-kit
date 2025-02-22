import { SnackbarProps } from "../../props/index.js";
import { HBoxBase as HBox } from "../HBox/index.js";
import { BackgroundBase as Background } from "../Background/index.js";
import { SpanBase as Span } from "../Span/index.js";
import { UI } from "../../util/index.js";

class Factory {
    super(parent) {
        this.parent = parent;
    }

    createSnackbar() {
        const snackbar = new HBox();
        snackbar.initialize();
        snackbar._hBox.classList.add("snackbar");
        return snackbar._hBox;
    }

    createSpan() {
        const span = new Span();
        span.initialize();
        span._span.style.flex = 1;
        return span._span;
    }

    createCloseBtn() {
        const closeButton = new Background({
            width: "20px",
            height: "20px",
            src: "/close.svg"
        });
        closeButton.initialize();
        closeButton._background.style.filter = "invert(1)";
        return closeButton._background;
    }
}

export class SnackbarBase extends Factory {

    _snackbar;
    _span;
    _closeBtn;

    constructor(props = new SnackbarProps()) {
        super({...new SnackbarProps(), ...props})
    }

    initialize() {
        this._snackbar = super.createSnackbar();
        this._span = super.createSpan();
        this._snackbar.appendChild(this._span);
        this._closeBtn = super.createCloseBtn();
        this._snackbar.appendChild(this._closeBtn);
        document.body.appendChild(this._snackbar);
    }

    onClose() {
        this._closeBtn.addEventListener("click", (e) => {
            UI.closeSnackbar();
        });
    }
}