export class ButtonBase extends Factory {
    _button: null;
    initialize(): void;
    onClick(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createButton(): HTMLButtonElement;
}
export {};
