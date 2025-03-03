import { FileInputProps } from "../../props";
declare class Factory {
    _props: FileInputProps;
    constructor(props: FileInputProps);
    createTextInput(): HTMLInputElement;
    createFileInput(): HTMLInputElement;
}
export declare abstract class FileInputBase extends Factory {
    _textInput: HTMLInputElement;
    _fileInput: HTMLInputElement;
    _editable: boolean;
    _size: number;
    _multiselect: boolean;
    constructor(props: FileInputProps);
    abstract onClick(): void;
    abstract onChange(): void;
    _onClick(): void;
    _onChange(): void;
}
export {};
