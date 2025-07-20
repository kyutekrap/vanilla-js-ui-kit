import { LoaderProps } from "../../props";

export class LoaderFactory {

    _props: LoaderProps;

    constructor(props: LoaderProps) {
        this._props = props;
    }

    createLoader(): HTMLDivElement {
        const loader = document.createElement("div");
        loader.classList.add("loader");
        return loader;
    }
}