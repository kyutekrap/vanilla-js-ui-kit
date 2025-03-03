import { SnackbarProps } from "../../props/Snackbar";
import { HBoxDefault } from "../../default/HBox";
import { SpanDefault } from "../../default/Span";
import { BackgroundDefault } from "../../default/Background";

export class SnackbarFactory {

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