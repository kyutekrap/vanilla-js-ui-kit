import { AppBarProps } from "../../props";
declare class Factory {
    _props: AppBarProps;
    constructor(props: AppBarProps);
    createHBox(): HTMLDivElement;
}
export declare abstract class AppBarBase extends Factory {
    _appBar: HTMLDivElement;
    constructor(props: AppBarProps);
}
export {};
