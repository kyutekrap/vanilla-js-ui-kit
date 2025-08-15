import { SelectBase } from "../../base/Select";
import { SelectProps } from "../../props/Select";

export class SelectDefault extends SelectBase {
    
    constructor(props: SelectProps) {
        super(props);
    }

    refreshOptions(options: string[]): void {
        super._refreshOptions(options);
    }
}