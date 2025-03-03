import { SnackbarProps } from "../../props";
declare class Factory {
    _props: SnackbarProps;
    constructor(props: SnackbarProps);
    createSnackbar(): HTMLDivElement;
    createSpan(): HTMLSpanElement;
    createCloseBtn(): HTMLDivElement;
}
export declare abstract class SnackbarBase extends Factory {
    _snackbar: HTMLDivElement;
    _span: HTMLSpanElement;
    _closeBtn: HTMLDivElement;
    constructor(props?: SnackbarProps);
    abstract onClose(): void;
    _onClose(): void;
}
export {};
