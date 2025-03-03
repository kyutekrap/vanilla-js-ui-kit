import { SearchBase } from "../../base/Search";
import { SearchProps } from "../../props/Search";

export class SearchDefault extends SearchBase {
    constructor(props: SearchProps) {
        super(props);
    }

    onChange() {
        this._input.addEventListener("change", (e: Event) => {
            super._onChange(e);
        });
    }
}