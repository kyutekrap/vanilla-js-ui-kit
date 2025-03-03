import { FileInputProps } from "../../props/FileInput";
export declare class FileInputFactory {
    _props: FileInputProps;
    constructor(props: FileInputProps);
    createTextInput(): HTMLInputElement;
    createFileInput(): HTMLInputElement;
}
