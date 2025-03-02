import { VBoxBase as VBox } from "../VBox";
import { SectionProps } from "../../props";

class Factory {

    _props: SectionProps;

    constructor(props: SectionProps) {
        this._props = props;
    }

    createSection(): HTMLDivElement {
        const section = new VBox();
        section._vBox.classList.add("section");
        for (var i=0; i < this._props.children.length; i++) {
            section._vBox.appendChild(this._props.children[i]);
        }
        return section._vBox;
    }
}

export class SectionBase extends Factory {

    _section: HTMLDivElement;

    constructor(props: SectionProps) {
        super(props);
        this._section = super.createSection();
        document.body.appendChild(this._section);
    }
}