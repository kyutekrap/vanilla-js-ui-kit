import { LoaderProps } from "../../props";
import { LoaderFactory } from "../../factory";

export abstract class LoaderBase extends LoaderFactory {

    _loader: HTMLDivElement;

    constructor(props: LoaderProps) {
        super(props);
        this._loader = super.createLoader();
        document.body.appendChild(this._loader);
    }
}