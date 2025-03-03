import { FileInputBase } from "../../base/FileInput";
import { FileInputProps } from "../../props/FileInput";

export class FileInputDefault extends FileInputBase {
    constructor(props: FileInputProps) {
        super(props);
        this._fileInput.addEventListener("click", (e) => this.onClick(e));
        this._fileInput.addEventListener("change", (e) => this.onChange(e));
    }

    onClick(e: any) {
        super._onClick(e);
    }

    onChange(e: any) {
        super._onChange(e);
    }
}