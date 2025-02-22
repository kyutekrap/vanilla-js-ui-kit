export class InputBase extends Factory {
    _input: any;
    initialize(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createInput(): HTMLInputElement;
}
export {};
