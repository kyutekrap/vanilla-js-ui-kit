import { SearchBase } from "../../base";
import { SearchProps } from "../../props";

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