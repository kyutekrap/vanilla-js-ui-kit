import { LoaderProps } from "../../props";
export declare class LoaderFactory {
    _props: LoaderProps;
    constructor(props: LoaderProps);
    createLoader(): HTMLDivElement;
}
