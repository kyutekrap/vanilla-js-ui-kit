import { SectionProps } from "../../props/Section";
import { VBoxDefault } from "../../default/VBox";

export class SectionFactory {

    _props: SectionProps;

    constructor(props: SectionProps) {
        this._props = props;
    }

    createSection(): HTMLDivElement {
        const section = new VBoxDefault();
        section._vBox.classList.add("section");
        for (var i=0; i < this._props.children.length; i++) {
            section._vBox.appendChild(this._props.children[i]);
        }
        return section._vBox;
    }
}