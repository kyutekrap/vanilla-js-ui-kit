import { SnackbarProps } from "../../props/Snackbar";
import { SnackbarFactory } from "../../factory/Snackbar";
export declare abstract class SnackbarBase extends SnackbarFactory {
    _snackbar: HTMLDivElement;
    _span: HTMLSpanElement;
    _closeBtn: HTMLDivElement;
    constructor(props?: SnackbarProps);
    abstract onClose(e: any): void;
    _onClose(e: any): void;
}
