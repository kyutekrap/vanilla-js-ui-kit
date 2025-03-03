import { SnackbarProps } from "../../props/Snackbar";
export declare class SnackbarFactory {
    _props: SnackbarProps;
    constructor(props: SnackbarProps);
    createSnackbar(): HTMLDivElement;
    createSpan(): HTMLSpanElement;
    createCloseBtn(): HTMLDivElement;
}
