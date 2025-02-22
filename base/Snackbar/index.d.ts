export class SnackbarBase extends Factory {
    constructor(props?: any);
    _snackbar: any;
    _span: any;
    _closeBtn: any;
    initialize(): void;
    onClose(): void;
}
declare class Factory {
    super(parent: any): void;
    parent: any;
    createSnackbar(): any;
    createSpan(): any;
    createCloseBtn(): any;
}
export {};
