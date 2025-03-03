import { SearchBase } from "../../base/Search";
import { SearchProps } from "../../props/Search";

export class SearchDefault extends SearchBase {
    constructor(props: SearchProps) {
        super(props);
        this._input.addEventListener("change", (e) => this.onChange(e));
    }

    onChange(e: any) {
        super._onChange(e);
    }
}