import { SnackbarProps } from "../../props/Snackbar";
import { UI } from "../../util";
import { SnackbarFactory } from "../../factory/Snackbar";

export abstract class SnackbarBase extends SnackbarFactory {

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

    abstract onClose(e: any): void;

    _onClose(e: any) {
        UI.closeSnackbar();
    }
}