import { LoaderProps } from "../../props";
import { LoaderFactory } from "../../factory";
export declare abstract class LoaderBase extends LoaderFactory {
    _loader: HTMLDivElement;
    constructor(props: LoaderProps);
}
