import { SectionProps } from "../../props/Section";
import { SectionFactory } from "../../factory/Section";

export abstract class SectionBase extends SectionFactory {

    _section: HTMLDivElement;

    constructor(props: SectionProps) {
        super(props);
        this._section = super.createSection();
        document.body.appendChild(this._section);
    }
}