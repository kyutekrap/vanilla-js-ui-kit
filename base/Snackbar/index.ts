import { SnackbarProps } from "../../props";
import { UI } from "../../util";
import { BackgroundDefault, HBoxDefault, SpanDefault } from "../../default";

class Factory {

    _props: SnackbarProps;

    constructor(props: SnackbarProps) {
        this._props = props;
    }

    createSnackbar(): HTMLDivElement {
        const snackbar = new HBoxDefault();
        snackbar._hBox.classList.add("snackbar");
        return snackbar._hBox;
    }

    createSpan(): HTMLSpanElement {
        const span = new SpanDefault();
        span._span.style.flex = "1";
        return span._span;
    }

    createCloseBtn(): HTMLDivElement {
        const closeButton = new BackgroundDefault({
            width: "20px",
            height: "20px",
            src: "/close.svg"
        });
        closeButton._background.style.filter = "invert(1)";
        return closeButton._background;
    }
}

export abstract class SnackbarBase extends Factory {

    _snackbar: HTMLDivElement;
    _span: HTMLSpanElement;
    _closeBtn: HTMLDivElement;

    constructor(props: SnackbarProps = {}) {
        super(props);
        this._snackbar = super.createSnackbar();
        this._span = super.createSpan();
        this._snackbar.appendChild(this._span);
        this._closeBtn = super.createCloseBtn();
        this._snackbar.appendChild(this._closeBtn);
        document.body.appendChild(this._snackbar);
    }

    abstract onClose(): void;

    _onClose() {
        this._closeBtn.addEventListener("click", (e) => {
            UI.closeSnackbar();
        });
    }
}