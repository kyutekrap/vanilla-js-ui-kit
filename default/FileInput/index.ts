import { FileInputBase } from "../../base";
import { FileInputProps } from "../../props";

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