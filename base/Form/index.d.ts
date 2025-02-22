export class FormBase extends Factory {
    _form: any;
    initialize(): void;
    onSubmit(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createForm(): HTMLFormElement;
}
export {};
