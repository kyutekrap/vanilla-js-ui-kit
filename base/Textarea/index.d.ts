export class TextareaBase extends Factory {
    _textarea: any;
    initialize(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createTextarea(): HTMLTextAreaElement;
}
export {};
