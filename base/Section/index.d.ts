import { SectionProps } from "../../props/Section";
import { SectionFactory } from "../../factory/Section";
export declare abstract class SectionBase extends SectionFactory {
    _section: HTMLDivElement;
    constructor(props: SectionProps);
}
