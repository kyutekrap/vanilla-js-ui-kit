import { SelectBase } from "../../base/Select";
import { SelectProps } from "../../props/Select";
export declare class SelectDefault extends SelectBase {
    constructor(props: SelectProps);
    onChange(e: any): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    refreshOptions(options: string[]): void;
}
