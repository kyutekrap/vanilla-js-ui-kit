import { SectionProps } from "../../props";
declare class Factory {
    _props: SectionProps;
    constructor(props: SectionProps);
    createSection(): HTMLDivElement;
}
export declare abstract class SectionBase extends Factory {
    _section: HTMLDivElement;
    constructor(props: SectionProps);
}
export {};
