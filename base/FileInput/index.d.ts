export class FileInputBase extends Factory {
    _textInput: any;
    _fileInput: any;
    initialize(): void;
    onClick(): void;
    onChange(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createTextInput(): HTMLInputElement;
    createFileInput(): any;
}
export {};
