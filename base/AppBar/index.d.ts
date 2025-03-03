import { AppBarProps } from "../../props/AppBar";
import { AppBarFactory } from "../../factory/AppBar";
export declare abstract class AppBarBase extends AppBarFactory {
    _appBar: HTMLDivElement;
    constructor(props: AppBarProps);
}
