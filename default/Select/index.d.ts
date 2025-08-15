import { SelectBase } from "../../base/Select";
import { SelectProps } from "../../props/Select";
export declare class SelectDefault extends SelectBase {
    constructor(props: SelectProps);
    refreshOptions(options: string[]): void;
}
