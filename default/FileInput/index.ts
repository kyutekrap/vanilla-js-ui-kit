import { FileInputBase } from "../../base/FileInput";
import { FileInputProps } from "../../props/FileInput";

export class FileInputDefault extends FileInputBase {
    constructor(props: FileInputProps) {
        super(props);        
    }

    onClick() {
        super._onClick();
    }

    onChange() {
        super._onChange();
    }
}