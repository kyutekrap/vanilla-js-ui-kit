import { SectionProps } from "../../props/Section";
export declare class SectionFactory {
    _props: SectionProps;
    constructor(props: SectionProps);
    createSection(): HTMLDivElement;
}
